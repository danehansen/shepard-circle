import styles from './Label.module.scss';
import classnames from 'classnames';
import convertIndexToRadians from '../../util/convertIndexToRadians';
import {toRadianDirection} from '../../util/math';

export default function Label({pitchNamesSorted}) {
  const radius = 35;
  const semitones = pitchNamesSorted.length;

  return <div className={styles.root}>{pitchNamesSorted.map(function(name, index) {
    const degrees = 360 / semitones * index;
    const radians = toRadianDirection(degrees);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    return <div
      className={classnames(styles.button, name.length > 1 && styles.small)}
      key={index}
      style={{
        left: `${(cos * radius + 50)}%`,
        top: `${(-sin * radius + 50)}%`,
      }}
    >{name}</div>
  })}</div>
}
