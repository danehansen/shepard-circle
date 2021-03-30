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
import {OSCILLATOR_TYPES, DEFAULT_TRANSPOSITION, EQ_FREQUENCIES, MODES, VIRTUAL_FINGER_UNITS} from 'util/constants';
import {STANDARD_A4, STANDARD_SEMITONES, transposeFrequency, CENTS_PER_OCTAVE} from 'util/music';
import findPitchSkipOptions from 'util/findPitchSkipOptions';
import findBestPitchNames from 'util/findBestPitchNames';
import findPitchNames from 'util/findPitchNames';
import findBaseFrequencies from 'util/findBaseFrequencies';
import findPitchSequence from 'util/findPitchSequence';
import findChordNames from 'util/findChordNames';
import sortPitchNames from 'util/sortPitchNames';
import {initializaAudio, playPitchClasses} from 'util/shepardTone';
import {useViewportDimensions} from 'util/hooks';
import findChords from 'util/findChords';
import replaceState from 'util/replaceState';
import simplifyFraction from 'util/simplifyFraction';

import {useState, useEffect} from 'react';
import queryString from 'query-string';
import {isEqual, unionWith, findIndex} from 'lodash';

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

  const params = {
    arrayFormat: 'comma',
    parseNumbers: true,
  };

  const urlParams = queryString.parse(window.location.search, params);
  function useURLParams(key, value, def) {
    useEffect(() => {
      function changeParams() {
        replaceState(queryString.stringify(urlParams, params));
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

  function onVirtualFinger(value, isOn, units) {
    if (isOn) {
      const alreadyContained = manualVirtualFingers.find(element => element.value === value && element.units === units)
      if (!alreadyContained) {
        setManualVirtualFingers([...manualVirtualFingers, {value, units}]);
      }
    } else {
      const index = manualVirtualFingers.findIndex(element => element.value === value && element.units === units)
      if (index >= 0) {
        const newActiveVirtualFingers = [...manualVirtualFingers];
        newActiveVirtualFingers.splice(index, 1);
        setManualVirtualFingers(newActiveVirtualFingers);
      }
    }
  }

  function toggleVirtualFinger(value, units) {
    const virtualFinger = {value, units};
    const index = findIndex(toggledVirtualFingers, vf => isEqual(vf, virtualFinger));
    let newToggledVirtualFingers = [];
    if (index >= 0) {
      newToggledVirtualFingers = [...newToggledVirtualFingers];
      newToggledVirtualFingers.splice(index, 1);
    } else {
      newToggledVirtualFingers = [...newToggledVirtualFingers, virtualFinger];
    }
    setToggledVirtualFingers(newToggledVirtualFingers);
  }

  const [manualPitchClasses, setManualPitchClasses] = useState([]);

  const [toggledPitchClasses, setToggledPitchClasses] = useState(urlParams.toggledPitchClasses || []);
  // useURLParams('toggledPitchClasses', toggledPitchClasses, []);

  const [manualVirtualFingers, setManualVirtualFingers] = useState([]);

  const [toggledVirtualFingers, setToggledVirtualFingers] = useState(urlParams.toggledVirtualFingers || []);
  // useURLParams('toggledVirtualFingers', toggledVirtualFingers, []);

  const [soundingPitchClasses, setSoundingPitchClasses] = useState([...manualPitchClasses]);
  useEffect(() => {
    const newSoundingVirtualFingers = unionWith(manualVirtualFingers, toggledVirtualFingers, isEqual);

    let newSoundingPitchClasses = unionWith(manualPitchClasses, toggledPitchClasses, isEqual);

    let virtualPitchClasses = [];
    for (let i = 0; i < newSoundingVirtualFingers.length; i++) {
      const virtualFinger = newSoundingVirtualFingers[i];

      for (let j = 0; j < newSoundingPitchClasses.length; j++) {
        const pitchClass = newSoundingPitchClasses[j];
        let virtualPitchClass;
        const pitchClassFraction = pitchClass[0] / pitchClass[1];
        if (virtualFinger.units === VIRTUAL_FINGER_UNITS.STEPS) {
          let index = pitchClassFraction * STANDARD_SEMITONES;
          if (index % 1 === 0) {
            const pitchClassIsInScale = !!MODES[mode].chords[index];
            if (pitchClassIsInScale) {
              let steps = 0;
              let halfSteps = 0;
              while (steps !== virtualFinger.value) {
                halfSteps ++;
                index = (index + 1) % STANDARD_SEMITONES;
                if (!!MODES[mode].chords[index]) {
                  steps++;
                }
              }
              const virtualFingerFraction = halfSteps / STANDARD_SEMITONES;
              const totalFraction = pitchClassFraction + virtualFingerFraction;
              const simpleFraction = simplifyFraction(totalFraction, 1);
              virtualPitchClass = simpleFraction;
            } else {
              // TODO: pitchClass is not within mode
            }
          } else {
            // TODO: index not 0-11 integer
          }
        } else {
          const virtualFingerFraction = virtualFinger.value / CENTS_PER_OCTAVE;
          const totalFraction = pitchClassFraction + virtualFingerFraction;
          const simpleFraction = simplifyFraction(totalFraction, 1);
          virtualPitchClass = simpleFraction;
        }
        if (virtualPitchClass) {
          virtualPitchClasses.push(virtualPitchClass);
        }
      }
    }

    newSoundingPitchClasses = unionWith(newSoundingPitchClasses, virtualPitchClasses, isEqual);
    setSoundingPitchClasses(newSoundingPitchClasses);
  }, [manualPitchClasses, toggledPitchClasses, manualVirtualFingers, toggledVirtualFingers, mode]);

  useEffect(() => {
    playPitchClasses(soundingPitchClasses, mode, transposition, oscillator, a4);
    setActiveChords(findChords(soundingPitchClasses, semitones, pitchNames));
  }, [soundingPitchClasses, mode, transposition, oscillator, a4, pitchNames, semitones]);

  function togglePitchClass(pitchClass) {
    const index = findIndex(toggledPitchClasses, pc => isEqual(pc, pitchClass));
    let newToggledPitchClasses;
    if (index >= 0) {
      newToggledPitchClasses = [...toggledPitchClasses];
      newToggledPitchClasses.splice(index, 1);
    } else {
      newToggledPitchClasses = [...toggledPitchClasses, pitchClass];
    }
    setToggledPitchClasses(newToggledPitchClasses);
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

  return (
    <FirstTouch className={styles.root} callback={ initializaAudio.bind(null, eq)}>
      <div className={styles.contentHolder}>
        <div className={styles.top}>
          <VirtualFingers
            pitchNames={pitchNames}
            onVirtualFinger={onVirtualFinger}
            toggleVirtualFinger={toggleVirtualFinger}
            hasMode={!!mode}
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
          soundingPitchClasses={soundingPitchClasses}
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
          setManualPitchClasses={setManualPitchClasses}
          togglePitchClass={togglePitchClass}
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
