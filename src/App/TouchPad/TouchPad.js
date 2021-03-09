import {useRef} from 'react';
import {modulo} from '@danehansen/math';
import {toDegreeDirection} from '../../util/math';
import styles from './TouchPad.module.scss';

export default function TouchPad({
  pitchSequence,
  callback,
  diameter,
}) {
  const rootNode = useRef(null);

  function onTouchMove(evt) {
    anyTouch(evt);
  }

  function onTouchStart(evt) {
    anyTouch(evt);
  }

  function onTouchEnd(evt) {
    anyTouch(evt);
  }

  function onTouchCancel(evt) {
    anyTouch(evt);
  }

  function anyTouch(evt) {
    const {targetTouches} = evt;

    if (!targetTouches) {
      callback([]);
    }
    const rect = rootNode.current.getBoundingClientRect();
    const halfSlice = Math.PI / pitchSequence.length;
    const pitches = []
    for (let i = 0; i < targetTouches.length; i++) {
      const {clientX, clientY} = targetTouches[i];
      const x = clientX - rect.x - diameter * 0.5;
      const y = -(clientY - rect.y - diameter * 0.5);
      const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

      if (length <= diameter / 2) {
        const rad = modulo(Math.atan2(y, x), Math.PI * 2);
        const degrees = toDegreeDirection(rad - halfSlice);
        const index = Math.floor(degrees / 360 * pitchSequence.length);
        pitches.push(pitchSequence[index]);
      }
    }
    callback(pitches);
  }

  return <div
    ref={rootNode}
    className={styles.root}
    onTouchMove={onTouchMove}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    onTouchCancel={onTouchCancel}
  />;
}
