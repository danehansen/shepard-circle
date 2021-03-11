import styles from './Menu.module.scss';
import {OSCILLATOR_TYPES, MODES, EQ_FREQUENCIES} from '../../util/constants';
import {STANDARD_A4, A4, STANDARD_SEMITONES, STANDARD_PITCH_NAMES, HUMAN_CENT_THRESHOLD, CENTS_PER_STANDARD_SEMITONE, CENTS_PER_OCTAVE} from '../../util/music';
import classnames from 'classnames';

function findIncrementLabel(increment, semitones) {
  if (increment === 1) {
    return 'clockwise';
  } else if (increment === semitones - 1) {
    return 'counterclockwise';
  }
  if (semitones % STANDARD_SEMITONES === 0) {
    if (increment === 7) {
      return 'circle of fifths';
    } else if (increment === semitones - 7) {
      return 'circle of fourths';
    }
  }
  return `skip ${increment - 1}`;
}

export default function Menu({
    a4,
    setA4,
    eq,
    setEq,
    mode,
    setMode,
    oscillator,
    setOscillator,
    pitchSkip,
    setPitchSkip,
    semitones,
    setSemitones,
    transposition,
    setTransposition,
    pitchSkipOptions,
  }) {

  function onOscillatorChange({ target: { value }}) {
    setOscillator(value);
  }

  function onEQChange(index, {target: {value}}) {
    const values = [...eq]
    values[index] = value;
    setEq(values);
  }

  return (
    <form className={styles.root}>
      <div className={styles.property}>
        <h2 className={styles.title}>Oscillator</h2>
        {Object.values(OSCILLATOR_TYPES).map((value) => {
          return <label className={styles.label} key={value}>
            <input className={styles.input} type="radio" checked={oscillator === value} value={value} onChange={onOscillatorChange} />
            <div className={styles.labelText}>{value}</div>
          </label>
        })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>EQ<button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setEq(EQ_FREQUENCIES.map(() => 0))}}>reset</button></h2>
        <div className={styles.verticalRangeHolder}>
          {eq.map((value, i) => {
            return <input
              key={i} className={styles.verticalRange} type="range" min="-1" max={1 * 0.27} step="0.01" value={value} onChange={onEQChange.bind(null, i)} />
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Transposition</h2>
        <div className={styles.columns}>
          {STANDARD_PITCH_NAMES.map((name, index) => {
            return <label className={styles.label} key={name}>
              <input className={styles.input} type="radio" value={index * CENTS_PER_STANDARD_SEMITONE} name="transposition" checked={transposition === index * CENTS_PER_STANDARD_SEMITONE} onChange={({target:{value}}) => {setTransposition(parseInt(value))}} />
              <div className={styles.labelText}>{name}</div>
            </label>
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Mode</h2>
        <div className={styles.columns}>
          {MODES.map((modeObj, index) => {
            return <label className={styles.label} key={modeObj.name}>
              <input className={styles.input} type="radio" value={index} name="mode" checked={mode === index} onChange={({target:{value}}) => {setMode(parseInt(value))}} />
              <div className={styles.labelText}>{modeObj.name}</div>
            </label>
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Semitones<button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setSemitones(STANDARD_SEMITONES)}}>reset</button></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <input className={styles.input} type="range" min={1} max={CENTS_PER_OCTAVE / HUMAN_CENT_THRESHOLD} value={semitones} onChange={({target: {value}}) => {setSemitones(parseInt(value))}} />
          <div className={styles.labelText}>{semitones}</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>A4<button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setA4(STANDARD_A4)}}>reset</button></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <input
            className={styles.input}
            type="range"
            min={Math.min(...Object.keys(A4))}
            max={Math.max(...Object.keys(A4))}
            value={a4}
            onChange={({target:{value}}) => {setA4(parseInt(value))}}
          />
          <div className={styles.labelText}>{a4}{A4[a4] && ` (${A4[a4]})`}</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Organize</h2>
        <div className={styles.columns}>
        {pitchSkipOptions.map((num) => {
          return <label className={styles.label} key={num}>
            <input className={styles.input} type="radio" value={num} name="pitchSkip" checked={pitchSkip === num} onChange={({target:{value}}) => {setPitchSkip(parseInt(value))}} />
            <div className={styles.labelText}>{findIncrementLabel(num, semitones)}</div>
          </label>
        })}
        </div>
      </div>
    </form>
  );
}
