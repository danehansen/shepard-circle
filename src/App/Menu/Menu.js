import styles from './Menu.module.scss';
import {MIN_FREQ, MAX_FREQ, TEMPERMENT_TYPES, OSCILLATOR_TYPES, DEFAULT_SEMITONES, PITCH_NAMES, MODES} from '../../constants';

function findIncrementLabel(increment, semitones) {
  let str = String(increment);
  if (increment === 1) {
    str += ` (chromatic)`;
  } else if (increment === semitones - 1) {
    str += ` (reverse chromatic)`;
  } else if (semitones === 12 && increment === 7) {
    str += ` (circle of fifths)`;
  }
  return str;
}

export default function Menu({
    a4,
    setA4,
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
        <h2 className={styles.title}>Semitones</h2>
        <label className={styles.label}>
          <input className={styles.input} type="range" min={1} max={120} value={semitones} step="1" onChange={function({target: {value}}){setSemitones(parseInt(value))}} />
          <div className={styles.labelText}>{semitones}</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Transposition</h2>
          {PITCH_NAMES.map(function(name, index) {
            return <label className={styles.label} key={name}>
              <input className={styles.input} type="radio" value={index} name="transposition" checked={transposition === index} onChange={function({target:{value}}){setTransposition(parseInt(value))}} />
              <div className={styles.labelText}>{name}</div>
            </label>
          })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Mode</h2>
          {MODES.map(function(name, index) {
            if (!name) {
              return null;
            }
            return <label className={styles.label} key={name}>
              <input className={styles.input} type="radio" value={index} name="mode" checked={mode === index} onChange={function({target:{value}}){setMode(parseInt(value))}} />
              <div className={styles.labelText}>{name}</div>
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
        <h2 className={styles.title}>A4</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="range"
            min={390}
            max={490}
            value={a4}
            step="1"
            onChange={function({target:{value}}){setA4(parseInt(value))}}
          />
          <div className={styles.labelText}>{a4}</div>
        </label>
      </div>
    </form>
  );
}
