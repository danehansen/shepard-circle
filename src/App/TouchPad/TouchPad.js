import {useRef, useState} from 'react';
import {modulo} from '@danehansen/math';
import {toDegreeDirection} from '../../util/math';
import styles from './TouchPad.module.scss';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from '../../util/constants';

const IS_TOUCH_SCREEN = 'ontouchstart' in window;

export default function TouchPad({
  pitchSequence,
  callback,
  diameter,
}) {
  const rootNode = useRef();
  const [pointerIsDown, setPointerIsDown] = useState(false);

  function handle(evt) {
    const pitches = [];
    const type = evt.type;
    const isTouchEvent = /touch/.test(type);
    const rect = rootNode.current.getBoundingClientRect();
    const halfSlice = RADIANS_IN_CIRCLE / pitchSequence.length / 2;

    function findPitchIndex(clientX, clientY) {
      const x = clientX - rect.x - diameter * 0.5;
      const y = -(clientY - rect.y - diameter * 0.5);
      const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

      if (length <= diameter / 2) {
        const rad = modulo(Math.atan2(y, x), RADIANS_IN_CIRCLE);
        const degrees = toDegreeDirection(rad - halfSlice);
        const index = Math.floor(degrees / DEGREES_IN_CIRCLE * pitchSequence.length);
        if (typeof index === 'number') {
          pitches.push(pitchSequence[index]);
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
    ref={rootNode}
    className={styles.root}
    {...listeners}
  />;
}
