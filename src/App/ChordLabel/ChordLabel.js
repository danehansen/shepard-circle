import styles from './ChordLabel.module.scss';
import convertIndexToRadians from '../../util/convertIndexToRadians';
import {toRadianDirection} from '../../util/math';

export default function ChordLabel({chordNamesSorted, diameter}) {
  const semitones = chordNamesSorted.length;

  return <div className={styles.root}>{chordNamesSorted.map(function(name, index) {
    if (!name) {
      return null;
    }
    const degrees = 360 / semitones * index;

    return <div
      className={styles.button}
      key={index}
      style={{
        transform: `translate(-50%, -50%) rotate(${degrees}deg) translateY(${diameter * -0.22}px)`,
      }}
    >{name}</div>
  })}</div>
}
