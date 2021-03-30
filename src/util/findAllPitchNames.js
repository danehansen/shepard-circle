import {modulo} from '@danehansen/math';
import {MODES} from 'util/constants';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from 'util/music';

const PITCH_NAMES = ['A', ['A♯','B♭'], 'B', 'C', ['C♯','D♭'], 'D', ['D♯','E♭'], 'E', 'F', ['F♯','G♭'], 'G', ['G♯','A♭']];

function m(num) {
  return modulo(num, STANDARD_SEMITONES);
}

export default function findAllPitchNames(transposition, mode) {
  // TODO: this is bad!
  if ((transposition === 400 && mode === 1) || (transposition === 100 && mode === 6)) {
    return ['A','A♯','B','B♯','C♯','D','D♯','E','E♯','F♯','G','G♯'];
  } else if ((transposition === 600 && mode === 1) || (transposition === 300 && mode === 6)) {
    return ['A','B♭','B','C','D♭','D','E♭','E','F','G♭','G','A♭'];
  } else if ((transposition === 900 && mode === 1) || (transposition === 600 && mode === 6)) {
    return ['A','A♯','B','C','C♯','D','D♯','E','E♯','F♯','G','G♯'];
  } else if ((transposition === 1100 && mode === 1) || (transposition === 800 && mode === 6)) {
    return ['A','A♯','B','B♯','C♯','D','D♯','E','E♯','F♯♯','G','G♯'];
  }
  const {useModeForNaming} = MODES[mode];
  if (typeof useModeForNaming === 'number') {
    return findAllPitchNames(transposition, useModeForNaming);
  }

  function makeArrayWithNakedLettersInKeySpots(array) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const {chords} = MODES[mode];
    let lastLetterIndex = 0;
    for (let i = 0; i < STANDARD_SEMITONES; i++) {
      const chordIndex = m(i - transposition / CENTS_PER_STANDARD_SEMITONE);
      const chord = chords[chordIndex];
      if (chord) {
        array[i] = letters[lastLetterIndex];
        lastLetterIndex++;
      }
    }
    return array;
  }

  function addAccidentalsToKeySpots(array) {
    for (let i = 0; i < STANDARD_SEMITONES; i++) {
      const pitchName = PITCH_NAMES[i];
      const lastPitchName = PITCH_NAMES[m(i - 1)]
      const nextPitchName = PITCH_NAMES[m(i + 1)]
      if (array[i]) {
        if (!Array.isArray(pitchName)) {
          if (lastPitchName === array[i]) {
            array[i] = `${array[i]}♯`;
          } else if (nextPitchName === array[i]) {
            array[i] = `${array[i]}♭`;
          }
        } else {
          const index = pitchName.findIndex((node) => node.indexOf(array[i]) >= 0)
          array[i] = pitchName[index];
        }
      }
    }
  }

  function fillInEmptySpots(array) {
    const hasFlats = array.join('').indexOf('♭') >= 0;
    const hasSharps = array.join('').indexOf('♯') >= 0;
    for (let i = 0; i < 12; i++) {
      if (array[i]) {
        continue;
      }
      const pitchName = PITCH_NAMES[i];
      if (Array.isArray(pitchName)) {
        if (hasFlats && !hasSharps) {
          array[i] = pitchName[1];
        } else if (!hasFlats && hasSharps) {
          array[i] = pitchName[0];
        } else {
          // defaulting to sharps for C major
          array[i] = pitchName[0];
        }
      } else {
        array[i] = pitchName;
      }
    }
  }

  const allNames = [];
  makeArrayWithNakedLettersInKeySpots(allNames);
  addAccidentalsToKeySpots(allNames);
  fillInEmptySpots(allNames);
  // console.log('findAllPitchNames', {transposition, mode, allNames})
  return allNames;
}
