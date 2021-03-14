import styles from './MatchingChords.module.scss';
import classnames from 'classnames';

export default function MatchingChords({chords}) {
  const chordHolders = [];
  chords.forEach(({name, fingersNeeded}) => {
    if (!chordHolders[fingersNeeded]) {
      chordHolders[fingersNeeded] = [];
    }
    chordHolders[fingersNeeded].push(<span
      className={styles.chord}
      key={name}
    >{name}</span>);
  });

  return (
    <div className={styles.root}>
    {chordHolders.map((chordHolder, i) => {
      return <div
        className={classnames(styles.chordHolder, styles[`fingersNeeded${i}`])}
        key={i}
      >{chordHolder}</div>
    })}
    </div>
  );
}
