import styles from './PitchLabel.module.scss';
import classnames from 'classnames';
import { DEGREES_IN_CIRCLE } from '../../util/constants';

export default function PitchLabel({pitchNamesSorted, diameter, chordNamesSorted}) {
  const semitones = pitchNamesSorted.length;

  return <div className={styles.root}>{pitchNamesSorted.map(function(name, index) {
    const degrees = DEGREES_IN_CIRCLE / semitones * index;
    const hasAccidental = name?.length === 2 || name?.length === 3;
    const isSmall = name?.length > 3;
    let transform;
    let transformOrigin;
    const radius = -0.475;
    const accidentalRadis = radius * 0.96;

    if (isSmall) {
      transform = `translate(0%, -50%) rotate(${degrees}deg) translate(0%, 50%) translateY(${diameter * radius}px) rotate(${90}deg)`;
      transformOrigin = `0 50%`;
    } else {
      transformOrigin = `50% 0`;
      if (hasAccidental) {
        transform = `translate(-50%, 0) rotate(${degrees}deg) translateY(${diameter * accidentalRadis}px) `;
      } else {
        transform = `translate(-50%, 0) rotate(${degrees}deg) translateY(${diameter * radius}px) `;
      }
    }

    return <div
      className={classnames(styles.button, isSmall && styles.small, hasAccidental && styles.hasAccidental, !chordNamesSorted[index] && styles.deemphesized)}
      key={index}
      style={{transform, transformOrigin}}
    >{name}</div>
  })}</div>
}
