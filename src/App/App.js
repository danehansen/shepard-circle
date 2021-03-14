import styles from './App.module.scss';
import Display from './Display/Display';
import Menu from './Menu/Menu';
import PitchLabel from './PitchLabel/PitchLabel';
import ChordLabel from './ChordLabel/ChordLabel';
import TouchPad from './TouchPad/TouchPad';
import Button from './Button/Button';
import FirstTouch from './FirstTouch/FirstTouch';
import MatchingChords from './MatchingChords/MatchingChords';
import {OSCILLATOR_TYPES, DEFAULT_TRANSPOSITION, EQ_FREQUENCIES} from '../util/constants';
import {STANDARD_A4, STANDARD_SEMITONES, transposeFrequency} from '../util/music';
import {useState, useEffect} from 'react';
import findPitchSkipOptions from '../util/findPitchSkipOptions';
import findAllPitchNames from '../util/findAllPitchNames';
import findPitchNames from '../util/findPitchNames';
import findBaseFrequencies from '../util/findBaseFrequencies';
import findPitchSequence from '../util/findPitchSequence';
import findChordNames from '../util/findChordNames';
import sortPitchNames from '../util/sortPitchNames';
import {initializaAudio, toggleNote} from '../util/shepardTone';
import queryString from 'query-string';
import {isEqual} from 'lodash';
import {useViewportDimensions} from '../util/hooks';
import {random} from '@danehansen/math';
import findChords from '../util/findChords';

export default function App() {
  const urlParams = queryString.parse(window.location.search, {parseNumbers: true, arrayFormat: 'comma'});
  function useURLParams(key, value, def) {
    useEffect(() => {
      function changeParams() {
        window.history.replaceState(null, null, `${window.location.origin}${window.location.pathname}?${queryString.stringify(urlParams, {arrayFormat: 'comma'})}`);
      }

      if (!isEqual(urlParams[key], value)) {
        if (isEqual(def, value) && urlParams[key] !== undefined) {
          delete urlParams[key];
          changeParams();
        } else if (!isEqual(def, value)) {
          urlParams[key] = value;
          changeParams();
        }
      }
    }, [value, key, def]);
  }

  const [a4, setA4] = useState(urlParams.a4 || STANDARD_A4);
  useURLParams('a4', a4, STANDARD_A4);

  const [oscillator, setOscillator] = useState(urlParams.oscillator || OSCILLATOR_TYPES.SINE);
  useURLParams('oscillator', oscillator, OSCILLATOR_TYPES.SINE);

  const [semitones, setSemitones] = useState(urlParams.semitones || STANDARD_SEMITONES);
  useURLParams('semitones', semitones, STANDARD_SEMITONES);

  const [transposition, setTransposition] = useState(urlParams.transposition !== undefined ? urlParams.transposition : DEFAULT_TRANSPOSITION);
  useURLParams('transposition', transposition, DEFAULT_TRANSPOSITION);

  const [mode, setMode] = useState(urlParams.mode || 0);
  useURLParams('mode', mode, 0);

  const [allPitchNames, setAllPitchNames] = useState(findAllPitchNames(transposition, mode));
  useEffect(() => {
    setAllPitchNames(findAllPitchNames(transposition, mode));
  }, [mode, transposition]);

  const [pitchNames, setPitchNames] = useState(findPitchNames(semitones, transposition, allPitchNames));
  useEffect(() => {
    setPitchNames(findPitchNames(semitones, transposition, allPitchNames));
  }, [semitones, transposition, allPitchNames]);

  const [pitchSkipOptions, setPitchSkipOptions] = useState(findPitchSkipOptions(semitones));
  useEffect(() => {
    setPitchSkipOptions(findPitchSkipOptions(semitones));
  }, [semitones]);

  const _ps = urlParams.pitchSkip ? urlParams.pitchSkip : pitchSkipOptions[0];
  const [pitchSkip, setPitchSkip] = useState(_ps);
  useEffect(() => {
    if (pitchSkipOptions.indexOf(pitchSkip) < 0) {
      setPitchSkip(pitchSkipOptions[0]);
    }
  }, [pitchSkipOptions, pitchSkip]);
  useURLParams('pitchSkip', pitchSkip, _ps);

  const _eq = [];
  for (let i = 0; i < EQ_FREQUENCIES.length; i++) {
    _eq.push(0);
  }

  const [eq, setEq] = useState(urlParams.eq || EQ_FREQUENCIES.map(() => 0));
  useURLParams('eq', eq, EQ_FREQUENCIES.map(() => 0));

  const [rootFrequency, setRootFrequency] = useState(transposeFrequency(a4, transposition));
  useEffect(() => {
    setRootFrequency(transposeFrequency(a4, transposition));
  }, [transposition, a4]);

  const [baseFrequencies, setBaseFrequencies] = useState(findBaseFrequencies(semitones, rootFrequency));
  useEffect(() => {
    setBaseFrequencies(findBaseFrequencies(semitones, rootFrequency));
  }, [semitones, rootFrequency]);

  const [pitchSequence, setPitchSequence] = useState(findPitchSequence(semitones, pitchSkip));
  useEffect(() => {
    setPitchSequence(findPitchSequence(semitones, pitchSkip));
  }, [semitones, pitchSkip]);

  const [pitchNamesSorted, setPitchNamesSorted] = useState(sortPitchNames(pitchNames, pitchSkip));
  useEffect(() => {
    setPitchNamesSorted(sortPitchNames(pitchNames, pitchSkip));
  }, [pitchNames, pitchSkip]);

  const [chordNamesSorted, setChordNamesSorted] = useState(findChordNames(semitones, mode, pitchSkip));
  useEffect(() => {
    setChordNamesSorted(findChordNames(semitones, mode, pitchSkip));
  }, [semitones, pitchSkip, mode]);

  const [activePitches, setActivePitches] = useState([]);
  const [activeChords, setActiveChords] = useState([]);

  const diameter = Math.min(...useViewportDimensions());

  const [isMenuOpen, setMenuOpen] = useState(false);
  function onMenuButtonClick() {
    if (isMenuOpen) {
      initializaAudio(baseFrequencies, eq);
    }
    setMenuOpen(!isMenuOpen);
  }

  function onTouchCallback(pitches) {
    function addRandomPitches(low, high) {
      if (!pitches.length || (!low && !high)) {
        return pitches;
      }

      const randomAmount = random(low, high, true);
      const randomPitches = [];
      for (let i = 0; i < randomAmount; i++) {
        let randomPitch;
        do {
          randomPitch = random(0, 12, true);
        } while (pitches.indexOf(randomPitch) >= 0)
        randomPitches.push(randomPitch);
      }

      return [...pitches, ...randomPitches];
    }

    // const newPitches = addRandomPitches(1, 2);
    const newPitches = addRandomPitches();

    for(let i = 0; i < semitones; i++) {
      if (newPitches.indexOf(i) >= 0) {
        toggleNote(i, true, oscillator)
      } else {
        toggleNote(i, false, oscillator)
      }
    }

    setActivePitches(newPitches);
    setActiveChords(findChords(newPitches, semitones, pitchNames));
  }

  return (
    <FirstTouch className={styles.root} callback={ initializaAudio.bind(null, baseFrequencies, eq)}>
      <div className={styles.contentHolder}>
        <MatchingChords chords={activeChords} />
      </div>
      <div className={styles.wheelHolder} style={{width: `${diameter}px`, height: `${diameter}px`}}>
        <Display
          activePitches={activePitches}
          baseFrequencies={baseFrequencies}
          diameter={diameter}
          pitchSequence={pitchSequence}
          mode={mode}
        />
        <PitchLabel pitchNamesSorted={pitchNamesSorted} diameter={diameter} chordNamesSorted={chordNamesSorted} />
        <ChordLabel chordNamesSorted={chordNamesSorted} diameter={diameter} />
        <TouchPad
          callback={onTouchCallback}
          diameter={diameter}
          pitchSequence={pitchSequence}
        />
      </div>

      {isMenuOpen && <div className={styles.menuHolder}><Menu
        a4={a4}
        setA4={setA4}
        allPitchNames={allPitchNames}
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

      <Button className={styles.menuButton} onClick={onMenuButtonClick}>{isMenuOpen ? 'x' : 'menu'}</Button>
    </FirstTouch>
  );
}
