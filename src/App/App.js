import styles from './App.module.scss';
import Display from './Display/Display';
import Menu from './Menu/Menu';
import PitchLabel from './PitchLabel/PitchLabel';
import ChordLabel from './ChordLabel/ChordLabel';
import TouchPad from './TouchPad/TouchPad';
import Button from './Button/Button';
import FirstTouch from './FirstTouch/FirstTouch';
import MatchingChords from './MatchingChords/MatchingChords';
import VirtualFingers from './VirtualFingers/VirtualFingers';
import {OSCILLATOR_TYPES, DEFAULT_TRANSPOSITION, EQ_FREQUENCIES} from 'util/constants';
import {STANDARD_A4, STANDARD_SEMITONES, transposeFrequency} from 'util/music';
import {useState, useEffect} from 'react';
import findPitchSkipOptions from 'util/findPitchSkipOptions';
import findBestPitchNames from 'util/findBestPitchNames';
import findPitchNames from 'util/findPitchNames';
import findBaseFrequencies from 'util/findBaseFrequencies';
import findBaseFrequency from 'util/findBaseFrequency';
import findPitchSequence from 'util/findPitchSequence';
import findChordNames from 'util/findChordNames';
import sortPitchNames from 'util/sortPitchNames';
import {initializaAudio, playFrequencies} from 'util/shepardTone';
import {useViewportDimensions} from 'util/hooks';
import findChords from 'util/findChords';
import replaceState from 'util/replaceState';
import {random} from '@danehansen/math';
import queryString from 'query-string';
import {isEqual} from 'lodash';

export default function App() {
  // useEffect(() => {
  //   function handle(evt) {
  //     if (typeof evt.scale === 'number' && evt.scale !== 1) {
  //       evt.preventDefault();
  //     }
  //
  //     if (evt.touches?.length > 1) {
  //       evt.preventDefault();
  //     }
  //   }
  //
  //   const options = {
  //     // passive: false,
  //     // capture: false,
  //     // signal
  //   };
  //   let useCapture;
  //   // useCapture = false;
  //
  //   const events = [
  //     'pointerover',
  //     'pointerout',
  //     'pointerenter',
  //     'pointerleave',
  //     'pointerdown',
  //     'pointerup',
  //     'pointermove',
  //     'pointercancel',
  //     'click',
  //     'mouseup',
  //     'mousedown',
  //     'mouseenter',
  //     'mouseleave',
  //     'mouseover',
  //     'mouseout',
  //     'touchstart',
  //     'touchend',
  //     'touchcancel',
  //     'touchcmove',
  //   ];
  //
  //   events.forEach((eventType) => {
  //     window.addEventListener(eventType, handle, options, useCapture);
  //   });
  //
  //   return () => {
  //     events.forEach((eventType) => {
  //       window.removeEventListener(eventType, handle, options, useCapture);
  //     });
  //   }
  // }, []);

  const urlParams = queryString.parse(window.location.search, {parseNumbers: true, arrayFormat: 'comma'});
  function useURLParams(key, value, def) {
    useEffect(() => {
      function changeParams() {
        replaceState(queryString.stringify(urlParams, {arrayFormat: 'comma'}));
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

  const [allPitchNames, setAllPitchNames] = useState(findBestPitchNames(transposition, mode));
  useEffect(() => {
    setAllPitchNames(findBestPitchNames(transposition, mode));
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

  const [manualPitches, setManualPitches] = useState([]);
  const [activeVirtualFingers, setActiveVirtualFingers] = useState([]);
  function onVirtualFinger(cents, isOn) {
    if (isOn) {
      if (activeVirtualFingers.indexOf(cents) < 0) {
        setActiveVirtualFingers([...activeVirtualFingers, cents]);
      }
    } else {
        const newActiveVirtualFingers = [...activeVirtualFingers];
        newActiveVirtualFingers.splice(activeVirtualFingers.indexOf(cents, 1));
      setActiveVirtualFingers(newActiveVirtualFingers);
    }
  }

  const [activeChords, setActiveChords] = useState([]);

  const diameter = Math.min(...useViewportDimensions());

  const [isMenuOpen, setMenuOpen] = useState(false);
  function onMenuButtonClick() {
    if (isMenuOpen) {
      initializaAudio(eq);
    }
    setMenuOpen(!isMenuOpen);
  }

  function onTouchCallback(pitches) {
    function addRandomPitches(low, high = low) {
      if (!pitches.length || !low) {
        return pitches;
      }

      const randomAmount = random(low, high, true);
      const randomPitches = [];
      for (let i = 0; i < randomAmount; i++) {
        let randomPitch;
        do {
          randomPitch = random(0, 12, true);
          // randomPitch = (pitches[0] + 3)%12
        } while (pitches.indexOf(randomPitch) >= 0)
        randomPitches.push(randomPitch);
      }

      return [...pitches, ...randomPitches];
    }

    // const newPitches = addRandomPitches(1, 2);
    const newPitches = addRandomPitches();
    setManualPitches(newPitches);
    setActiveChords(findChords(newPitches, semitones, pitchNames));
  }

  useEffect(() => {
    const activeFrequencies = [];
    for(let i = 0; i < semitones; i++) {
      if (manualPitches.indexOf(i) >= 0) {
        const frequency = baseFrequencies[i];
        if (activeFrequencies.indexOf(frequency) < 0) {
          activeFrequencies.push(frequency);
        }
        for (let j = 0; j < activeVirtualFingers.length; j++) {
          const virtualFrequency = findBaseFrequency(transposeFrequency(frequency, activeVirtualFingers[j]));
          if (activeFrequencies.indexOf(virtualFrequency) < 0) {
            activeFrequencies.push(virtualFrequency);
          }
        }
      }
    }

    const ap = activeFrequencies.map((af) => {
      let closestDistance = Number.MAX_VALUE;
      let closestIndex;
      baseFrequencies.forEach((bf, i) => {
        const distance = Math.abs(af - bf);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      return closestIndex;
    })

    setAllPitches(ap);
    playFrequencies(activeFrequencies, oscillator);
  }, [manualPitches, activeVirtualFingers, baseFrequencies, oscillator, semitones]);

  const [allPitches, setAllPitches] = useState([]);

  return (
    <FirstTouch className={styles.root} callback={ initializaAudio.bind(null, eq)}>
      <div className={styles.contentHolder}>
        <div className={styles.top}>
          <VirtualFingers
            pitchNames={pitchNames}
            callback={onVirtualFinger}
          />
        </div>
        <div className={styles.bottom}>
          <MatchingChords
            chords={activeChords}
            pitchNames={pitchNames}
          />
        </div>
      </div>
      <div className={styles.wheelHolder} style={{width: `${diameter}px`, height: `${diameter}px`}}>
        <Display
          activePitches={allPitches}
          baseFrequencies={baseFrequencies}
          diameter={diameter}
          pitchSequence={pitchSequence}
          mode={mode}
        />
        <PitchLabel
          pitchNamesSorted={pitchNamesSorted}
          diameter={diameter}
          chordNamesSorted={chordNamesSorted}
        />
        <ChordLabel
          chordNamesSorted={chordNamesSorted}
          diameter={diameter}
        />
        <TouchPad
          callback={onTouchCallback}
          diameter={diameter}
          pitchSequence={pitchSequence}
        />
      </div>

      {isMenuOpen && <div className={styles.menuHolder}>
        <Menu
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
        />
      </div>}

      <Button className={styles.menuButton} onClick={onMenuButtonClick}>{isMenuOpen ? 'x' : 'menu'}</Button>
    </FirstTouch>
  );
}
