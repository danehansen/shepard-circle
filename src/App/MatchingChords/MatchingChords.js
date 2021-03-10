import styles from './MatchingChords.module.scss';
import classnames from 'classnames';
// import findPitchNames from '../../util/findPitchNames';

export default function MatchingChords({chords}) {

  // const pitchNames = findPitchNames(semitones);


  return (
    <div className={styles.root}>
    {chords.map(function(chord, i) {
      let style;
      if (chord.textTransform) {
        style = {textTransform:chord.textTransform}
      }
      return <div className={classnames(styles.chord, chord.matchAmount === 1 && styles.complete)} key={i} style={style}>{`${chord.prefix}${chord.suffix}`}</div>
    })}
    </div>
  );
}
