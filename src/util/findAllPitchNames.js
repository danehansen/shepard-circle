import {modulo} from '@danehansen/math';
import {MODES} from './constants';
import {STANDARD_SEMITONES} from './music';

export const PITCH_NAMES = ['A', ['A♯','B♭'], 'B', 'C', ['C♯','D♭'], 'D', ['D♯','E♭'], 'E', 'F', ['F♯','G♭'], 'G', ['G♯','A♭']];

export default function findAllPitchNames(transposition, mode) {
  console.log('findAllPitchNames', {transposition, mode})

  const chords = [...MODES[mode].chords];
  // console.log({chords});
  return PITCH_NAMES.map((name, i) => {
    // console.log('map', {name, i});

    if (!Array.isArray(name)) {
      // console.log('not array', {name});
      return name;
    }
    // console.log('is array', {name});

    function m(i) {
      return modulo(i, STANDARD_SEMITONES)
    }


    let result;
    for (let j = 1; j <= STANDARD_SEMITONES / 2; j++) {
      const lastName = PITCH_NAMES[m(i - j)];
      const thisName = name;
      const nextName = PITCH_NAMES[m(i + j)];
      const lastChord = chords[m(i - j - transposition)];
      const thisChord = chords[i - transposition]
      const nextChord = chords[m(i + j - transposition)];
      const lastNameIsArray = Array.isArray(lastName);
      const nextNameIsArray = Array.isArray(nextName);

      if (!lastChord && nextChord) {
        result = name[0];
      } else if (lastChord && !nextChord) {
        result = name[1];
      }

      if (lastChord && nextChord) {
        if (!lastNameIsArray && nextNameIsArray) {
          // console.log('a')
          // return 'x';
          result = name[0];
        } else if (lastNameIsArray && !nextNameIsArray) {
          // console.log('b')
          // return 'y';
          result = name[1];
        }
      }

      console.log({
        // name,
        // j,
        // lastIndex,
        // thisIndex,
        // nextIndex,
        lastName,
        thisName,
        nextName,
        lastChord,
        thisChord,
        nextChord,
        result,
      });
      if (result) {
        return result;
      }
    }
  })
}
