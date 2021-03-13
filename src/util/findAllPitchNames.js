import {modulo} from '@danehansen/math';
import {MODES} from './constants';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from './music';

const PITCH_NAMES = ['A', ['A♯','B♭'], 'B', 'C', ['C♯','D♭'], 'D', ['D♯','E♭'], 'E', 'F', ['F♯','G♭'], 'G', ['G♯','A♭']];

function m(num) {
  return modulo(num, STANDARD_SEMITONES);
}

export default function findAllPitchNames(transposition, mode) {
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
  return allNames;
}
