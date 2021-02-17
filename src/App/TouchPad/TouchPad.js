import {useRef} from 'react';
import {round} from '@danehansen/math';

export default function TouchPad({className, callback}) {
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

    const circ = Math.PI * 2;
    const directions = []
    for (let i = 0; i < targetTouches.length; i++) {
      const {clientX, clientY} = targetTouches[i];
      const x = clientX - rect.x - rect.width * 0.5;
      const y = clientY - rect.y - rect.height * 0.5;
      const rad = (Math.atan2(-y, x) + circ) % circ;
      const rounded = Math.round(round(rad, circ / 12) / circ * 12) % 12;
      const direction = (12 * 2 - (rounded + 9)) % 12;
      // console.log('anyTouch', direction);
      directions.push(direction);
    }
    // console.log('anyTouch', directions);
    callback(directions);
  }

  return <div
    ref={rootNode}
    className={className}
    onTouchMove={onTouchMove}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    onTouchCancel={onTouchCancel}
  />;
}
