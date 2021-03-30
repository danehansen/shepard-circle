import Button from 'App/Button/Button';
import styles from './VirtualFingers.module.scss';
import {VIRTUAL_FINGER_UNITS} from 'util/constants';

const {STEPS, CENTS} = VIRTUAL_FINGER_UNITS;

export default function VirtualFingers({pitchNames, onVirtualFinger, hasMode, toggleVirtualFinger}) {
  const semitoneNodes = [];
  for (let i = 1; i < 12; i++) {
    semitoneNodes.push(
      <Button
        key={i}
        className={styles.button}
        onMouseDown={onVirtualFinger.bind(null, i * 100, true, CENTS)}
        onMouseUp={onVirtualFinger.bind(null, i * 100, false, CENTS)}
        onTouchStart={onVirtualFinger.bind(null, i * 100, true, CENTS)}
        onTouchEnd={onVirtualFinger.bind(null, i * 100, false, CENTS)}
        onDoubleClick={toggleVirtualFinger.bind(null, i * 100, CENTS)}
      >
        <span className={styles.fraction}>+</span>
        <span className={styles.fraction}>
          <div className={styles.numerator}>{i}</div>
          <div className={styles.denominator}>2</div>
        </span>
      </Button>
    )
  }

  const stepNodes = [];
  if (hasMode) {
    for (let i = 1; i < 7; i++) {
          stepNodes.push(
              <Button
                key={i}
                className={styles.button}
                onMouseDown={onVirtualFinger.bind(null, i, true, STEPS)}
                onMouseUp={onVirtualFinger.bind(null, i, false, STEPS)}
                onTouchStart={onVirtualFinger.bind(null, i, true, STEPS)}
                onTouchEnd={onVirtualFinger.bind(null, i, false, STEPS)}
                onDoubleClick={toggleVirtualFinger.bind(null, i, STEPS)}
              >
                <span className={styles.fraction}>+{i}</span>
              </Button>
            );
    }
  }


  return (
    <div className={styles.root}>
      <div className={styles.row}>
        {semitoneNodes}
      </div>
      {hasMode && <div className={styles.row}>
        {stepNodes}
      </div>}
    </div>
  );
}
