import styles from './Label.module.scss';
import classnames from 'classnames';
import findPitchNames from '../../util/findPitchNames';
import convertIndexToRadians from '../../util/convertIndexToRadians';

export default function Label({rootPitch, semitones, layoutIncrement}) {
  const pitchNames = findPitchNames(semitones);
  const radius = 35;
  return <div className={styles.root}>
  {pitchNames.map(function(name, index) {
    const rad = convertIndexToRadians(index, semitones, rootPitch, layoutIncrement);
    const x = Math.cos(rad);
    const y = -Math.sin(rad);
    return <div
      className={classnames(styles.button, name.length > 1 && styles.small)}
      key={name}
      style={{
        left: `${(x * radius + 50)}%`,
        top: `${(y * radius + 50)}%`,
      }}
    >{name}</div>
  })}</div>
}
