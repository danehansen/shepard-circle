import styles from './Keypad.module.scss';
import classnames from 'classnames';

export default function Keypad({className, notes}) {
  return (
    <div className={classnames(styles.root, className)}>
      {notes.map(function(note, i) {
        const rad = Math.PI * 2 / notes.length * (i - 6);
        const x = Math.cos(rad);
        const y = Math.sin(rad)
        return <button
          className={styles.button}
          key={note.label}
          style={{
            left: `${(x + 1) * 50}%`,
            top: `${(y + 1) * 50}%`,
          }}
          onTouchStart={note.play}
          onTouchEnd={note.pause}
        >{note.label}</button>
      })}
    </div>
  );
}
