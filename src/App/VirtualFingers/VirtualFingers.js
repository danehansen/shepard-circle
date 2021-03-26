import Button from 'App/Button/Button';
import styles from './VirtualFingers.module.scss';

export default function VirtualFingers({pitchNames, callback, hasMode}) {
  const semitoneNodes = [];
  for (let i = 1; i < 12; i++) {
    semitoneNodes.push(
      <Button
        key={i}
        className={styles.button}
        onMouseDown={callback.bind(null, i * 100, true, 'cents')}
        onMouseUp={callback.bind(null, i * 100, false, 'cents')}
        onTouchStart={callback.bind(null, i * 100, true, 'cents')}
        onTouchEnd={callback.bind(null, i * 100, false, 'cents')}
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
                onMouseDown={callback.bind(null, i, true, 'steps')}
                onMouseUp={callback.bind(null, i, false, 'steps')}
                onTouchStart={callback.bind(null, i, true, 'steps')}
                onTouchEnd={callback.bind(null, i, false, 'steps')}
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
