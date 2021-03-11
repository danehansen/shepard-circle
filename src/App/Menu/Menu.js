import styles from './Menu.module.scss';
import {OSCILLATOR_TYPES, MODES, EQ_FREQUENCIES} from '../../util/constants';
import {STANDARD_A4, A4, STANDARD_SEMITONES, STANDARD_PITCH_NAMES, HUMAN_CENT_THRESHOLD, CENTS_PER_STANDARD_SEMITONE, CENTS_PER_OCTAVE} from '../../util/music';
import LogscaleInput from './LogscaleInput/LogscaleInput';
import classnames from 'classnames';

function findIncrementLabel(increment, semitones) {
  let str = String(increment);
  if (increment === 1) {
    str += ` (chromatic)`;
  } else if (increment === semitones - 1) {
    str += ` (reverse chromatic)`;
  } else if (semitones === STANDARD_SEMITONES && increment === 7) {
    str += ` (circle of fifths)`;
  }
  return str;
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
        <label className={styles.label}>
          <input className={styles.input} type="radio" checked={oscillator === OSCILLATOR_TYPES.SINE} value={OSCILLATOR_TYPES.SINE} onChange={onOscillatorChange} />
          <div className={styles.labelText}>{OSCILLATOR_TYPES.SINE}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" checked={oscillator === OSCILLATOR_TYPES.SQUARE} value={OSCILLATOR_TYPES.SQUARE} onChange={onOscillatorChange} />
          <div className={styles.labelText}>{OSCILLATOR_TYPES.SQUARE}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" checked={oscillator === OSCILLATOR_TYPES.SAWTOOTH} value={OSCILLATOR_TYPES.SAWTOOTH} onChange={onOscillatorChange} />
          <div className={styles.labelText}>{OSCILLATOR_TYPES.SAWTOOTH}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" checked={oscillator === OSCILLATOR_TYPES.TRIANGLE} value={OSCILLATOR_TYPES.TRIANGLE} onChange={onOscillatorChange} />
          <div className={styles.labelText}>{OSCILLATOR_TYPES.TRIANGLE}</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>EQ<button className={styles.reset} onClick={function(){setEq([...Array(EQ_FREQUENCIES.length).keys()])}}>reset</button></h2>
        <div className={styles.verticalRangeHolder}>
          {eq.map(function(value, i) {
            return <LogscaleInput
              key={i} className={styles.verticalRange} type="range" min="-1" max={1 * 0.27} step="0.01" value={value} onChange={onEQChange.bind(null, i)} />
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Semitones<button className={styles.reset} onClick={function(){setSemitones(STANDARD_SEMITONES)}}>reset</button></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <LogscaleInput className={styles.input} type="range" min={1} max={CENTS_PER_OCTAVE / HUMAN_CENT_THRESHOLD} value={semitones} step="1" onChange={function({target: {value}}){setSemitones(parseInt(value))}} />
          <div className={styles.labelText}>{semitones}</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Transposition</h2>
          {STANDARD_PITCH_NAMES.map(function(name, index) {
            return <label className={styles.label} key={name}>
              <input className={styles.input} type="radio" value={index * CENTS_PER_STANDARD_SEMITONE} name="transposition" checked={transposition === index * CENTS_PER_STANDARD_SEMITONE} onChange={function({target:{value}}){setTransposition(parseInt(value))}} />
              <div className={styles.labelText}>{name}</div>
            </label>
          })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Mode</h2>
          {MODES.map(function(modeObj, index) {
            return <label className={styles.label} key={modeObj.name}>
              <input className={styles.input} type="radio" value={index} name="mode" checked={mode === index} onChange={function({target:{value}}){setMode(parseInt(value))}} />
              <div className={styles.labelText}>{modeObj.name}</div>
            </label>
          })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Pitch Skip</h2>
        {pitchSkipOptions.map(function(num) {
          return <label className={styles.label} key={num}>
            <input className={styles.input} type="radio" value={num} name="pitchSkip" checked={pitchSkip === num} onChange={function({target:{value}}){setPitchSkip(parseInt(value))}} />
            <div className={styles.labelText}>{findIncrementLabel(num, semitones)}</div>
          </label>
        })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>A4<button className={styles.reset} onClick={function(){setA4(STANDARD_A4)}}>reset</button></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <input
            className={styles.input}
            type="range"
            min={390}
            max={490}
            value={a4}
            step="1"
            onChange={function({target:{value}}){setA4(parseInt(value))}}
          />
          <div className={styles.labelText}>{a4}{A4[a4] && ` (${A4[a4]})`}</div>
        </label>
      </div>
    </form>
  );
}
