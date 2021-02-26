import styles from './App.module.scss';
import Menu from './Menu/Menu';
import {useState} from 'react';
import {MIN_FREQ, MAX_FREQ, TEMPERMENT_TYPES, OSCILLATOR_TYPES} from '../constants';
import findIncrementOptions from '../util/findIncrementOptions';
import ResizeListener from './ResizeListener/ResizeListener';
import Label from './Label/Label';
import TouchPad from './TouchPad/TouchPad';
import Display from './Display/Display';
import {initializaAudio, toggleNote} from '../util/shepardTone'

export default function App() {
  let [isMenuOpen, setMenuOpen] = useState(false);
  let [a4, setA4] = useState(440);
  let [temperment, setTemperment] = useState(TEMPERMENT_TYPES.EQUAL);
  let [oscillator, setOscillator] = useState(OSCILLATOR_TYPES.SINE);
  let [rootPitch, setRootPitch] = useState(3);

  let [minFreq, setMinFreq] = useState(MIN_FREQ);
  let [maxFreq, setMaxFreq] = useState(MAX_FREQ);
  function changeMinFreq(num) {
    if (num >= maxFreq) {
      setMaxFreq(num + 1);
    }
    setMinFreq(num);
  }
  function changeMaxFreq(num) {
    if (num <= minFreq) {
      setMinFreq(num - 1);
    }
    setMaxFreq(num);
  }

  let [semitones, setSemitones] = useState(12);
  function changeSemitones(num) {
    const incrementOptions = findIncrementOptions(num);
    if (incrementOptions.indexOf(layoutIncrement) >= 0) {
      setLayoutIncrement(1);
    }
    if (temperment !== TEMPERMENT_TYPES.EQUAL) {
      setTemperment(TEMPERMENT_TYPES.EQUAL);
    }
    setSemitones(num);
  }

  let [layoutIncrement, setLayoutIncrement] = useState(1);
  function changeLayoutIncrement(num) {
    setLayoutIncrement(num);
  }


  let [hasInitializedAudio, setHasInitializedAudio] = useState(false);
  function onInitialClick() {
    initializaAudio(semitones, a4, minFreq, maxFreq);
    setHasInitializedAudio(true);
  }

  function onMenuButtonClick() {
    if (isMenuOpen) {
      initializaAudio(semitones, a4, minFreq, maxFreq);
    }
    setMenuOpen(!isMenuOpen);
  }

  let [activePitches, setActivePitches] = useState([]);

  function onTouchCallback(pitches) {
    for(let i = 0; i < semitones; i++) {
      if (pitches.indexOf(i) >= 0) {
        toggleNote(i, true, oscillator)
      } else {
        toggleNote(i, false, oscillator)
      }
    }
    setActivePitches(pitches);
  }

  return (
    <div className={styles.root} onClick={hasInitializedAudio ? null : onInitialClick}>
      <div className={styles.contentHolder}>
      </div>
      <ResizeListener>
        {function(innerWidth, innerHeight) {
          const smallest = Math.min(innerWidth, innerHeight);
          return <div className={styles.wheelHolder} style={{width: `${smallest}px`, height: `${smallest}px`}}>
            <Display
              diameter={smallest}
              semitones={semitones}
              layoutIncrement={layoutIncrement}
              activePitches={activePitches}
              rootPitch={rootPitch}
              diameter={smallest}
            />
            <Label
              layoutIncrement={layoutIncrement}
              rootPitch={rootPitch}
              semitones={semitones}
            />
            {hasInitializedAudio && <TouchPad
              callback={onTouchCallback}
              semitones={semitones}
              diameter={smallest}
              layoutIncrement={layoutIncrement}
              rootPitch={rootPitch}
            />}
          </div>
        }}
      </ResizeListener>

      {isMenuOpen && <div className={styles.menuHolder}><Menu
        minFreq={minFreq}
        maxFreq={maxFreq}
        setMinFreq={changeMinFreq}
        setMaxFreq={changeMaxFreq}
        a4={a4}
        setA4={setA4}
        temperment={temperment}
        setTemperment={setTemperment}
        oscillator={oscillator}
        setOscillator={setOscillator}
        semitones={semitones}
        setSemitones={changeSemitones}
        rootPitch={rootPitch}
        setRootPitch={setRootPitch}
        layoutIncrement={layoutIncrement}
        setLayoutIncrement={changeLayoutIncrement}
      /></div>}

      <button className={styles.menuButton} onClick={onMenuButtonClick}>{isMenuOpen ? 'close menu' : 'open menu'}</button>
    </div>
  );
}
