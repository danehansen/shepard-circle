import Button from 'App/Button/Button';
import styles from './VirtualFingers.module.scss';

export default function VirtualFingers({pitchNames, callback}) {
  const semitoneNodes = [];
  for (let i = 1; i < 12; i++) {
    semitoneNodes.push(
      <Button
        key={i}
        className={styles.button}
        onMouseDown={callback.bind(null, i * 100, true)}
        onMouseUp={callback.bind(null, i * 100, false)}
        onTouchStart={callback.bind(null, i * 100, true)}
        onTouchEnd={callback.bind(null, i * 100, false)}
      >
        <span className={styles.fraction}>+</span>
        <span className={styles.fraction}>
          <div className={styles.numerator}>{i}</div>
          <div className={styles.denominator}>2</div>
        </span>
      </Button>
    )
  }

  return <div className={styles.root}>
    <div className={styles.row}>
      {semitoneNodes}
    </div>
  </div>
}
