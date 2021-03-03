import styles from './App.module.scss';
import {useState, useEffect} from 'react';
import {OSCILLATOR_TYPES, DEFAULT_SEMITONES} from '../constants';
import findPitchSkipOptions from '../util/findPitchSkipOptions';
import findPitchNames from '../util/findPitchNames';
import transposeFrequency from '../util/transposeFrequency';
import findBaseFrequencies from '../util/findBaseFrequencies';
import findPitchSequence from '../util/findPitchSequence';
import sortPitchNames from '../util/sortPitchNames';
import Display from './Display/Display';
import Menu from './Menu/Menu';
import Label from './Label/Label';
import TouchPad from './TouchPad/TouchPad';
import ResizeListener from './ResizeListener/ResizeListener';
import {initializaAudio, toggleNote} from '../util/shepardTone'

export default function App() {
  const [a4, setA4] = useState(440);
  const [oscillator, setOscillator] = useState(OSCILLATOR_TYPES.SINE);
  const [semitones, setSemitones] = useState(DEFAULT_SEMITONES);
  const [transposition, setTransposition] = useState(3);

  const [pitchNames, setPitchNames] = useState(findPitchNames(semitones, transposition));
  useEffect(function() {
    setPitchNames(findPitchNames(semitones, transposition));
  }, [semitones, transposition]);

  const [pitchSkipOptions, setPitchSkipOptions] = useState(findPitchSkipOptions(semitones));
  useEffect(function() {
    setPitchSkipOptions(findPitchSkipOptions(semitones));
  }, [semitones]);

  const [pitchSkip, setPitchSkip] = useState(pitchSkipOptions[0]);
  useEffect(function() {
    setPitchSkip(pitchSkipOptions[0]);
  }, [pitchSkipOptions]);

  const [rootFrequency, setRootFrequency] = useState(transposeFrequency(a4, transposition, DEFAULT_SEMITONES));
  useEffect(function() {
    setRootFrequency(transposeFrequency(a4, transposition, DEFAULT_SEMITONES));
  }, [transposition, a4]);

  const [baseFrequencies, setBaseFrequencies] = useState(findBaseFrequencies(semitones, rootFrequency));
  useEffect(function() {
    setBaseFrequencies(findBaseFrequencies(semitones, rootFrequency));
  }, [semitones, rootFrequency]);

  const [pitchSequence, setPitchSequence] = useState(findPitchSequence(semitones, pitchSkip));
  useEffect(function() {
    setPitchSequence(findPitchSequence(semitones, pitchSkip));
  }, [semitones, pitchSkip]);

  const [pitchNamesSorted, setPitchNamesSorted] = useState(sortPitchNames(pitchNames, transposition, pitchSkip));
  useEffect(function() {
    setPitchNamesSorted(sortPitchNames(pitchNames, pitchSkip));
  }, [pitchNames, pitchSkip]);

  const [activePitches, setActivePitches] = useState([]);

  const [hasInitializedAudio, setHasInitializedAudio] = useState(false);
  function onInitialClick() {
    initializaAudio(baseFrequencies);
    setHasInitializedAudio(true);
  }

  const [isMenuOpen, setMenuOpen] = useState(false);
  function onMenuButtonClick() {
    if (isMenuOpen) {
      initializaAudio(baseFrequencies);
    }
    setMenuOpen(!isMenuOpen);
  }

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

  console.log({baseFrequencies})

  return (
    <div className={styles.root} onClick={hasInitializedAudio ? null : onInitialClick}>
      <div className={styles.contentHolder}>
      </div>
      <ResizeListener>
        {function(innerWidth, innerHeight) {
          const smallest = Math.min(innerWidth, innerHeight);
          return <div className={styles.wheelHolder} style={{width: `${smallest}px`, height: `${smallest}px`}}>
            <Display
              activePitches={activePitches}
              baseFrequencies={baseFrequencies}
              diameter={smallest}
              pitchSequence={pitchSequence}
            />
            <Label pitchNamesSorted={pitchNamesSorted} />
            {hasInitializedAudio &&
              <TouchPad
                callback={onTouchCallback}
                diameter={smallest}
                pitchSequence={pitchSequence}
              />
            }
          </div>
        }}
      </ResizeListener>

      {isMenuOpen && <div className={styles.menuHolder}><Menu
        a4={a4}
        setA4={setA4}
        oscillator={oscillator}
        setOscillator={setOscillator}
        pitchSkip={pitchSkip}
        setPitchSkip={setPitchSkip}
        semitones={semitones}
        setSemitones={setSemitones}
        transposition={transposition}
        setTransposition={setTransposition}
        pitchSkipOptions={pitchSkipOptions}
      /></div>}

      <button className={styles.menuButton} onClick={onMenuButtonClick}>{isMenuOpen ? 'close menu' : 'open menu'}</button>
    </div>
  );
}
