import styles from './MatchingChords.module.scss';
import classnames from 'classnames';

export default function MatchingChords({chords}) {

  return (
    <div className={styles.root}>
    {chords.map(function(chord, i) {
      const {name, matchAmount} = chord;

      let className;
      if (matchAmount === 1) {
        className = 'a';
      } else if (matchAmount > 0.9) {
        className = 'b';
      } else if (matchAmount > 0.8) {
        className = 'c';
      } else if (matchAmount > 0.7) {
        className = 'd';
      } else if (matchAmount > 0.6) {
        className = 'e';
      } else {
        className = 'f';
      }

      return <div className={classnames(styles.chord, styles[className])} key={i}>{name}</div>
    })}
    </div>
  );
}
