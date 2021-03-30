import styles from './Menu.module.scss';
import {OSCILLATOR_TYPES, MODES, EQ_FREQUENCIES, A4} from 'util/constants';
import {STANDARD_A4, STANDARD_SEMITONES, HUMAN_CENT_THRESHOLD, CENTS_PER_STANDARD_SEMITONE, CENTS_PER_OCTAVE} from 'util/music';
import classnames from 'classnames';
import Input from './Input/Input';
import Button from 'App/Button/Button';

function findIncrementLabel(increment, semitones) {
  if (increment === 1) {
    return 'Clockwise';
  } else if (increment === semitones - 1) {
    return 'Anticlockwise';
  }
  if (semitones % STANDARD_SEMITONES === 0) {
    if (increment === 7) {
      return 'Circle of Fifths';
    } else if (increment === semitones - 7) {
      return 'Circle of Fourths';
    }
  }
  return `skip ${increment - 1}`;
}

export default function Menu({
    a4,
    setA4,
    allPitchNames,
    eq,
    setEq,
    modeIndex,
    setModeIndex,
    oscillatorType,
    setOscillatorType,
    pitchSkip,
    setPitchSkip,
    semitones,
    setSemitones,
    transposition,
    setTransposition,
    pitchSkipOptions,
  }) {

  function onOscillatorChange({ target: { value }}) {
    setOscillatorType(value);
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
            <Input type="radio" checked={oscillatorType === value} value={value} onChange={onOscillatorChange} />
            <div className={styles.labelText}>{value}</div>
          </label>
        })}
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>EQ<Button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setEq(EQ_FREQUENCIES.map(() => 0))}}>reset</Button></h2>
        <div className={styles.verticalRangeHolder}>
          {eq.map((value, i) => {
            return <Input
              key={i} className={styles.verticalRange} type="range" min="-1" max={1 * 0.27} step="0.01" value={value} onChange={onEQChange.bind(null, i)} />
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Transposition</h2>
        <div className={styles.columns}>
          {allPitchNames.map((name, index) => {
            return <label className={styles.label} key={name}>
              <Input type="radio" value={index * CENTS_PER_STANDARD_SEMITONE} name="transposition" checked={transposition === index * CENTS_PER_STANDARD_SEMITONE} onChange={({target:{value}}) => {setTransposition(parseInt(value))}} />
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
              <Input type="radio" value={index} name="mode" checked={modeIndex === index} onChange={({target:{value}}) => {setModeIndex(parseInt(value))}} />
              <div className={styles.labelText}>{modeObj.name}</div>
            </label>
          })}
        </div>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Semitones<Button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setSemitones(STANDARD_SEMITONES)}}>reset</Button><div className={styles.valueText}>{semitones}</div></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <Input type="range" min={1} max={CENTS_PER_OCTAVE / HUMAN_CENT_THRESHOLD} value={semitones} onChange={({target: {value}}) => {setSemitones(parseInt(value))}} />
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>A4<Button className={styles.reset} onClick={(evt) => {evt.preventDefault(); setA4(STANDARD_A4)}}>reset</Button><div className={styles.valueText}>{a4}{A4[a4] && ` (${A4[a4]})`}</div></h2>
        <label className={classnames(styles.label, styles.wide)}>
          <Input
            type="range"
            min={Math.min(...Object.keys(A4))}
            max={Math.max(...Object.keys(A4))}
            value={a4}
            onChange={({target:{value}}) => {setA4(parseInt(value))}}
          />
        </label>
      </div>

      <div className={styles.property}>
        <h2 className={styles.title}>Organize</h2>
        <div className={styles.columns}>
        {pitchSkipOptions.map((num) => {
          return <label className={styles.label} key={num}>
            <Input type="radio" value={num} name="pitchSkip" checked={pitchSkip === num} onChange={({target:{value}}) => {setPitchSkip(parseInt(value))}} />
            <div className={styles.labelText}>{findIncrementLabel(num, semitones)}</div>
          </label>
        })}
        </div>
      </div>

      <Button
        className={styles.issue}
        href="https://github.com/danehansen/shepard-wheel/issues"
      >submit issue</Button>
    </form>
  );
}
