import styles from './App.module.scss';
import Display from './Display/Display';
import Menu from './Menu/Menu';
import PitchLabel from './PitchLabel/PitchLabel';
import ChordLabel from './ChordLabel/ChordLabel';
import TouchPad from './TouchPad/TouchPad';
import ResizeListener from './ResizeListener/ResizeListener';
import FirstTouch from './FirstTouch/FirstTouch';
import {OSCILLATOR_TYPES, DEFAULT_TRANSPOSITION} from '../constants';
import {A4, SEMITONES} from '../util/music';
import {useState, useEffect} from 'react';
import findPitchSkipOptions from '../util/findPitchSkipOptions';
import findPitchNames from '../util/findPitchNames';
import transposeFrequency from '../util/transposeFrequency';
import findBaseFrequencies from '../util/findBaseFrequencies';
import findPitchSequence from '../util/findPitchSequence';
import findChordNames from '../util/findChordNames';
import sortPitchNames from '../util/sortPitchNames';
import {initializaAudio, toggleNote} from '../util/shepardTone';
import queryString from 'query-string';
import {isEqual} from 'lodash';

function changeParams(urlParams) {
  window.history.pushState(null, null, `${window.location.origin}${window.location.pathname}?${queryString.stringify(urlParams, {arrayFormat: 'comma'})}`);
}

function hook(urlParams, key, value, def) {
  if (!isEqual(urlParams[key], value)) {
    if (isEqual(def, value) && urlParams[key] !== undefined) {
      delete urlParams[key];
      changeParams(urlParams);
    } else if (!isEqual(def, value)) {
      urlParams[key] = value;
      changeParams(urlParams);
    }
  }
}

function useHook(urlParams, key, value, def) {
  useEffect(function() {
    hook(urlParams, key, value, def);
  }, [value]);
}

export default function App() {
  const urlParams = queryString.parse(window.location.search, {parseNumbers: true, arrayFormat: 'comma'});

  const [a4, setA4] = useState(urlParams.a4 || A4.DEFAULT);
  useHook(urlParams, 'a4', a4, A4.DEFAULT);

  const [oscillator, setOscillator] = useState(urlParams.oscillator || OSCILLATOR_TYPES.SINE);
  useHook(urlParams, 'oscillator', oscillator, OSCILLATOR_TYPES.SINE);

  const [semitones, setSemitones] = useState(urlParams.semitones || SEMITONES);
  useHook(urlParams, 'semitones', semitones, SEMITONES);

  const [transposition, setTransposition] = useState(urlParams.transposition !== undefined ? urlParams.transposition : DEFAULT_TRANSPOSITION);
  useHook(urlParams, 'transposition', transposition, DEFAULT_TRANSPOSITION);

  const [pitchNames, setPitchNames] = useState(findPitchNames(semitones, transposition));
  useEffect(function() {
    setPitchNames(findPitchNames(semitones, transposition));
  }, [semitones, transposition]);

  const [pitchSkipOptions, setPitchSkipOptions] = useState(findPitchSkipOptions(semitones));
  useEffect(function() {
    setPitchSkipOptions(findPitchSkipOptions(semitones));
  }, [semitones]);

  const _ps = urlParams.pitchSkip ? urlParams.pitchSkip : pitchSkipOptions[0];
  const [pitchSkip, setPitchSkip] = useState(_ps);
  useEffect(function() {
    if (pitchSkipOptions.indexOf(pitchSkip) < 0) {
      setPitchSkip(pitchSkipOptions[0]);
    }
  }, [pitchSkipOptions]);
  useHook(urlParams, 'pitchSkip', pitchSkip, _ps);

  const _eq = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [eq, setEq] = useState(urlParams.eq || _eq);
  useHook(urlParams, 'eq', eq, _eq);

  const [rootFrequency, setRootFrequency] = useState(transposeFrequency(a4, transposition));
  useEffect(function() {
    setRootFrequency(transposeFrequency(a4, transposition));
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

  const [mode, setMode] = useState(urlParams.mode || 0);
  useHook(urlParams, 'mode', mode, 0);

  const [chordNamesSorted, setChordNamesSorted] = useState([]);
  useEffect(function(){
    const chordNames = findChordNames(semitones, mode);
    setChordNamesSorted(sortPitchNames(chordNames, pitchSkip));
  }, [semitones, pitchSkip, mode]);

  const [activePitches, setActivePitches] = useState([]);

  const [isMenuOpen, setMenuOpen] = useState(false);
  function onMenuButtonClick() {
    if (isMenuOpen) {
      initializaAudio(baseFrequencies, eq);
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

  return (
    <FirstTouch className={styles.root} callback={ initializaAudio.bind(null, baseFrequencies, eq)}>
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
              mode={mode}
            />
            <PitchLabel pitchNamesSorted={pitchNamesSorted} diameter={smallest} mode={mode} />
            <ChordLabel chordNamesSorted={chordNamesSorted} diameter={smallest} />
            <TouchPad
              callback={onTouchCallback}
              diameter={smallest}
              pitchSequence={pitchSequence}
            />
          </div>
        }}
      </ResizeListener>

      {isMenuOpen && <div className={styles.menuHolder}><Menu
        a4={a4}
        setA4={setA4}
        eq={eq}
        setEq={setEq}
        mode={mode}
        setMode={setMode}
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

      <button className={styles.menuButton} onClick={onMenuButtonClick}>{isMenuOpen ? 'x' : 'menu'}</button>
    </FirstTouch>
  );
}
