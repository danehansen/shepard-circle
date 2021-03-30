import styles from './MultiTouchButtonGroup.module.scss';
import {IS_TOUCH_SCREEN} from 'util/constants';
import {useRef, useState} from 'react';
import classnames from 'classnames';
import {useBoundingClientRect} from 'util/hooks';

export default function MultiTouchButtonGroup({children, className, setActiveButtons}) {
  const [pointerIsDown, setPointerIsDown] = useState(false);
  const rootRef = useRef()
  const rootRect = useBoundingClientRect(rootRef);

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

  function handle(evt) {
    const activeChildren = [];
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
        const index = Math.floor((touch.clientX - rootRect.x) / rootRect.width * children.length);
        if (typeof index === 'number') {
          activeChildren.push(index);
        } else {
          setPointerIsDown(false);
        }
      }
    } else {
      if (type !== 'mouseup') {
        const index = Math.floor((evt.clientX - rootRect.x) / rootRect.width * children.length);
        if (typeof index === 'number') {
          activeChildren.push(index);
        } else {
          setPointerIsDown(false);
        }
      }
    }
    setActiveButtons(activeChildren);
  }



  return (
    <div
      ref={rootRef}
      className={classnames(styles.root, className)}
      {...listeners}
    >
      <div className={styles.killTouches}>
        {children}
      </div>
    </div>
  );
}
