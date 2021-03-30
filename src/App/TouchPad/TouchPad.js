import {useRef, useState} from 'react';
import {modulo, toDegreeDirection} from '@danehansen/math';
import simplifyFraction from 'util/simplifyFraction';
import styles from './TouchPad.module.scss';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from 'util/constants';
import {useBoundingClientRect} from 'util/hooks';

const IS_TOUCH_SCREEN = 'ontouchstart' in window;

export default function TouchPad({
  pitchSequence,
  setManualPitchClasses,
  togglePitchClass,
}) {
  const rootRef = useRef();
  const [pointerIsDown, setPointerIsDown] = useState(false);
  const {length:semitones} = pitchSequence;
  const rootRect = useBoundingClientRect(rootRef);
  const diameter = rootRect.width;
  const halfSlice = RADIANS_IN_CIRCLE / semitones / 2;

  function findPitchIndex(clientX, clientY) {
    const x = clientX - rootRect.x - diameter * 0.5;
    const y = -(clientY - rootRect.y - diameter * 0.5);
    const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (length <= diameter / 2) {
      const rad = modulo(Math.atan2(y, x), RADIANS_IN_CIRCLE);
      const degrees = toDegreeDirection(rad - halfSlice);
      const index = Math.floor(degrees / DEGREES_IN_CIRCLE * semitones);
      return index;
    }
    return null;
  }

  function handle(evt) {
    const pitches = [];
    const pitchClasses = [];
    const type = evt.type;
    const isTouchEvent = /touch/.test(type);


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
        const index = findPitchIndex(touch.clientX, touch.clientY);
        if (typeof index === 'number') {
              pitches.push(pitchSequence[index]);
              pitchClasses.push(simplifyFraction(index,semitones));
            }
          else {
            setPointerIsDown(false);
          }
      }
    } else {
      if (type !== 'mouseup') {
        const index = findPitchIndex(evt.clientX, evt.clientY);
        if (typeof index === 'number') {
            pitches.push(pitchSequence[index]);
            pitchClasses.push(simplifyFraction(index,semitones));
          }
        else {
          setPointerIsDown(false);
        }
      }
    }

    setManualPitchClasses(pitchClasses);
  }

  function handleToggle(evt) {
    const index = findPitchIndex(evt.clientX, evt.clientY);
    if (typeof index === 'number') {
      togglePitchClass(simplifyFraction(index,semitones))
    }
  }

  let listeners = {
    onDoubleClick: handleToggle,
  };
  if (IS_TOUCH_SCREEN) {
    listeners = {
      ...listeners,
      onTouchStart: handle,
      onTouchEnd: handle,
      onTouchCancel: handle,
      onTouchMove: handle,
    }
  } else {
    listeners = {
      ...listeners,
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
