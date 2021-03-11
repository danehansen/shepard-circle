import styles from './ChordLabel.module.scss';
import {DEGREES_IN_CIRCLE} from '../../util/constants';

export default function ChordLabel({chordNamesSorted, diameter}) {
  const semitones = chordNamesSorted.length;

  return <div className={styles.root}>{chordNamesSorted.map(function(name, index) {
    if (!name) {
      return null;
    }
    const degrees = DEGREES_IN_CIRCLE / semitones * index;

    return <div
      className={styles.button}
      key={index}
      style={{
        transform: `translate(-50%, -50%) rotate(${degrees}deg) translateY(${diameter * -0.22}px)`,
      }}
    >{name}</div>
  })}</div>
}
