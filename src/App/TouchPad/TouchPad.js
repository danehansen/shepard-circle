import {useRef, useEffect, useState} from 'react';
import {modulo, toDegreeDirection} from '@danehansen/math';
import simplifyFraction from 'util/simplifyFraction';
import styles from './TouchPad.module.scss';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from 'util/constants';
import {useBoundingClientRect} from 'util/hooks';

const IS_TOUCH_SCREEN = 'ontouchstart' in window;

export default function TouchPad({
  pitchSequence,
  callback,
  callbackNew,
}) {
  const rootRef = useRef();
  const [pointerIsDown, setPointerIsDown] = useState(false);
  const {length:semitones} = pitchSequence;
  const rootRect = useBoundingClientRect(rootRef);

  function handle(evt) {
    const pitches = [];
    const pitchClasses = [];
    const type = evt.type;
    const isTouchEvent = /touch/.test(type);
    const halfSlice = RADIANS_IN_CIRCLE / semitones / 2;
    const diameter = rootRect.width;

    function findPitchIndex(clientX, clientY) {
      const x = clientX - rootRect.x - diameter * 0.5;
      const y = -(clientY - rootRect.y - diameter * 0.5);
      const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

      if (length <= diameter / 2) {
        const rad = modulo(Math.atan2(y, x), RADIANS_IN_CIRCLE);
        const degrees = toDegreeDirection(rad - halfSlice);
        const index = Math.floor(degrees / DEGREES_IN_CIRCLE * semitones);
        if (typeof index === 'number') {
          pitches.push(pitchSequence[index]);
          pitchClasses.push(simplifyFraction(index,semitones));
        }
      } else {
        setPointerIsDown(false);
      }
    }

    switch(type) {
      case 'mousedown':
        setPointerIsDown(true);
        break;
      case 'mouseup':
        setPointerIsDown(false);
        break;
      // no default
    }

    if (isTouchEvent) {
      const targetTouches = evt.targetTouches || [];
      for (let i = 0; i < targetTouches.length; i++) {
        const touch = targetTouches[i];
        findPitchIndex(touch.clientX, touch.clientY);
      }
    } else {
      if (type !== 'mouseup') {
        findPitchIndex(evt.clientX, evt.clientY);
      }
    }

    callback(pitches);
    callbackNew(pitchClasses);
  }

  let listeners;
  if (IS_TOUCH_SCREEN) {
    listeners = {
      onTouchStart: handle,
      onTouchEnd: handle,
      onTouchCancel: handle,
      onTouchMove: handle,
    }
  } else {
    listeners = {
      onMouseUp: handle,
      onMouseDown: handle,
      onMouseMove: pointerIsDown ? handle : null,
    }
  }

  return <div
    ref={rootRef}
    className={styles.root}
    {...listeners}
  />;
}
