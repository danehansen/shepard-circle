import styles from './Menu.module.scss';
import {MIN_FREQ, MAX_FREQ, TEMPERMENT_TYPES, OSCILLATOR_TYPES} from '../../constants';
import findIncrementOptions from '../../../src/util/findIncrementOptions';
import findPitchNames from '../../../src/util/findPitchNames';

function findIncrementLabel(increment, semitones) {
  let str = String(increment);
  if (increment === 1) {
    str += ` (chromatic)`
  } else if (increment === semitones - 1) {
    str += ` (reverse chromatic)`
  } else if (semitones === 12 && increment === 7) {
    str += ` (circle of fifths)`
  }
  return str;
}

export default function Menu({ a4, temperment, semitones, minFreq, maxFreq, layoutIncrement, oscillator, rootPitch, setMinFreq, setMaxFreq, setA4, setTemperment, setOscillator, setSemitones, setRootPitch, setLayoutIncrement }) {
  function onTempermentChange({ target: { value }}) {
    setTemperment(value);
  }

  function onOscillatorChange({ target: { value }}) {
    setOscillator(value);
  }

  const pitchNames = findPitchNames(semitones);

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
        <h2 className={styles.title}>Root Pitch</h2>
        {pitchNames.map(function(name, index) {
          return <label className={styles.label} key={name}>
            <input className={styles.input} type="radio" value={index} name="rootPitch" checked={rootPitch === index} onChange={function({target:{value}}){setRootPitch(parseInt(value))}} />
            <div className={styles.labelText}>{name}</div>
          </label>
        })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Layout Increment</h2>
        {findIncrementOptions(semitones).map(function(num) {
          return <label className={styles.label} key={num}>
            <input className={styles.input} type="radio" value={num} name="increment" checked={layoutIncrement === num} onChange={function({target:{value}}){setLayoutIncrement(parseInt(value))}} />
            <div className={styles.labelText}>{findIncrementLabel(num, semitones)}</div>
          </label>
        })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Frequencies</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="number"
            min={MIN_FREQ}
            max={MAX_FREQ}
            value={minFreq}
            step="1"
            onChange={function({target:{value}}){setMinFreq(parseInt(value))}}
          />
          <div className={styles.labelText}>Minimum Frequency</div>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="number"
            min={MIN_FREQ}
            max={MAX_FREQ}
            value={maxFreq}
            step="1"
            onChange={function({target:{value}}){setMaxFreq(parseInt(value))}}
          />
          <div className={styles.labelText}>Max Frequency</div>
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Semitones</h2>
        <label className={styles.label}>
          <input className={styles.input} type="number" min={1} max={100} value={semitones} step="1" onChange={function({target: {value}}){setSemitones(parseInt(value))}} />
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>A4</h2>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="number"
            min={MIN_FREQ}
            max={MAX_FREQ}
            value={a4}
            step="1"
            onChange={function({target:{value}}){setA4(parseInt(value))}}
          />
        </label>
      </div>

      {/*<div className={styles.property}>
        <h2 className={styles.title}>Temperment</h2>
        <label className={styles.label}>
          <input className={styles.input} type="radio" disabled checked={temperment === TEMPERMENT_TYPES.EQUAL} value={TEMPERMENT_TYPES.EQUAL} onChange={onTempermentChange} />
          <div className={styles.labelText}>{TEMPERMENT_TYPES.EQUAL}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" disabled checked={temperment === TEMPERMENT_TYPES.JUST} value={TEMPERMENT_TYPES.JUST} onChange={onTempermentChange} />
          <div className={styles.labelText}>{TEMPERMENT_TYPES.JUST}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" disabled checked={temperment === TEMPERMENT_TYPES.MEANTONE} value={TEMPERMENT_TYPES.MEANTONE} onChange={onTempermentChange} />
          <div className={styles.labelText}>{TEMPERMENT_TYPES.MEANTONE}</div>
        </label>
        <label className={styles.label}>
          <input className={styles.input} type="radio" disabled checked={temperment === TEMPERMENT_TYPES.PYTHAGOREAN} value={TEMPERMENT_TYPES.PYTHAGOREAN} onChange={onTempermentChange} />
          <div className={styles.labelText}>{TEMPERMENT_TYPES.PYTHAGOREAN}</div>
        </label>
      </div>*/}
    </form>
  );
}
