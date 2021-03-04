import styles from './PitchLabel.module.scss';
import classnames from 'classnames';
import convertIndexToRadians from '../../util/convertIndexToRadians';
import {toRadianDirection} from '../../util/math';

export default function PitchLabel({pitchNamesSorted, diameter}) {
  const semitones = pitchNamesSorted.length;

  return <div className={styles.root}>{pitchNamesSorted.map(function(name, index) {
    const degrees = 360 / semitones * index;
    const isSmall = name.length > 1;
    let transform;
    let transformOrigin;
    const radius = -0.475;

    if (isSmall) {
      transform = `translate(0%, -50%) rotate(${degrees}deg) translate(0%, 50%) translateY(${diameter * radius}px) rotate(${90}deg)`;
      transformOrigin = `0 50%`;
    } else {
      transform = `translate(-50%, 0) rotate(${degrees}deg) translateY(${diameter * radius}px) `;
      transformOrigin = `50% 0`;
    }

    return <div
      className={classnames(styles.button, isSmall && styles.small)}
      key={index}
      style={{transform, transformOrigin}}
    >{name}</div>
  })}</div>
}
