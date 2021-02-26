import {useRef} from 'react';
import {round, modulo} from '@danehansen/math';
import styles from './TouchPad.module.scss';
import convertRadiansToIndex from '../../util/convertRadiansToIndex';

export default function TouchPad({className, callback, semitones, diameter, layoutIncrement, rootPitch}) {
  const rootNode = useRef(null);

  function onTouchMove(evt) {
    // console.log('onTouchMove');
    anyTouch(evt);
  }

  function onTouchStart(evt) {
    // console.log('onTouchStart');
    anyTouch(evt);
  }

  function onTouchEnd(evt) {
    const {targetTouches} = evt;
    // console.log('onTouchEnd', targetTouches[0]);
    anyTouch(evt);
  }

  function onTouchCancel(evt) {
    // console.log('onTouchCancel');
    anyTouch(evt);
  }

  function anyTouch(evt) {
    const {targetTouches} = evt;

    if (!targetTouches) {
      callback([]);
    }
    const rect = rootNode.current.getBoundingClientRect();
    const pitches = []
    for (let i = 0; i < targetTouches.length; i++) {
      const {clientX, clientY} = targetTouches[i];
      const x = clientX - rect.x - diameter * 0.5;
      const y = -(clientY - rect.y - diameter * 0.5);

      const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      if (length <= diameter / 2) {
        const rad = modulo(Math.atan2(y, x), Math.PI * 2);
        const pitch = convertRadiansToIndex(rad, semitones, rootPitch, layoutIncrement);
        pitches.push(pitch);
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
