import {modulo} from '@danehansen/math';
import {MODES} from './constants';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from './music';

const PITCH_NAMES = ['A', ['A♯','B♭'], 'B', 'C', ['C♯','D♭'], 'D', ['D♯','E♭'], 'E', 'F', ['F♯','G♭'], 'G', ['G♯','A♭']];

function m(num) {
  return modulo(num, STANDARD_SEMITONES);
}

export default function findAllPitchNames(transposition, mode) {
  const chords = [...MODES[mode].chords];
  const end = PITCH_NAMES.map((name, i) => {
    if (!Array.isArray(name)) {
      return name;
    }

    let result;
    for (let j = 1; j <= STANDARD_SEMITONES / 2; j++) {
      const lastName = PITCH_NAMES[m(i - j)];
      const nextName = PITCH_NAMES[m(i + j)];
      const lastChord = chords[m(i - j - (transposition / CENTS_PER_STANDARD_SEMITONE))];
      const nextChord = chords[m(i + j - (transposition / CENTS_PER_STANDARD_SEMITONE))];
      const lastNameIsArray = Array.isArray(lastName);
      const nextNameIsArray = Array.isArray(nextName);

      if (!lastChord && nextChord) {
        result = name[0];
      } else if (lastChord && !nextChord) {
        result = name[1];
      }

      if (lastChord && nextChord) {
        if (!lastNameIsArray && nextNameIsArray) {
          result = name[0];
        } else if (lastNameIsArray && !nextNameIsArray) {
          result = name[1];
        }
      }
      if (result) {
        return result;
      }
    }
    return name[0];
  })
  return end;
}
