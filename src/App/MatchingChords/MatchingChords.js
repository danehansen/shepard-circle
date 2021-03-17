import styles from './MatchingChords.module.scss';
import classnames from 'classnames';
import {CHORD_TYPES} from '../../util/constants';

export default function MatchingChords({chords, pitchNames}) {
  const chordHolders = [];
  for (let i = 0; i < chords.length; i++) {
    const {fingersNeeded, chordIndex, rootPitch} = chords[i];
    const CHORD_TYPE = CHORD_TYPES[chordIndex];
    if (!chordHolders[fingersNeeded]) {
      chordHolders[fingersNeeded] = [];
    }
    chordHolders[fingersNeeded].push(<span
      className={styles.chord}
      key={i}
    >{pitchNames[rootPitch][CHORD_TYPE.textTransform]()}{CHORD_TYPE.suffix}<sup /></span>);
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
