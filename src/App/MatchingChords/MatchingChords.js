import styles from './MatchingChords.module.scss';
import classnames from 'classnames';
// import findPitchNames from '../../util/findPitchNames';

export default function MatchingChords({chords, semitones}) {

  // const pitchNames = findPitchNames(semitones);


  return (
    <div className={styles.root}>
    {chords.map(function(chord, i) {
      return <div className={classnames(styles.chord, chord.matchAmount === 1 && styles.complete)} key={i}>{`${chord.prefix}${chord.suffix}`}</div>
    })}
    </div>
  );
}
