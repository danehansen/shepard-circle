import styles from './MatchingChords.module.scss';
import classnames from 'classnames';

export default function MatchingChords({chords}) {
  const chordHolders = [];
  for (let i = 0; i < chords.length; i++) {
    const {name, fingersNeeded} = chords[i];
    if (!chordHolders[fingersNeeded]) {
      chordHolders[fingersNeeded] = [];
    }
    chordHolders[fingersNeeded].push(<span
      className={styles.chord}
      key={i}
    >{name}</span>);
  }

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
