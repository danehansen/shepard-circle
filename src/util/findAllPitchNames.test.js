import findAllPitchNames from './findAllPitchNames';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from './music';
import {MODES} from './constants';
import {modulo} from '@danehansen/math';

describe('findAllPitchNames', function() {
  it('returns correct results for all keys and modes with 7 pitches', () => {
    const letters = 'abcdefg';
    const startingTransposition = 0;
    const endingTransposition = 1100;
    const startingMode = 0;
    const endingMode = MODES.length - 1;

    for (let transposition = startingTransposition; transposition <= endingTransposition; transposition += CENTS_PER_STANDARD_SEMITONE) {
      for (let mode = startingMode; mode <= endingMode; mode++) {
        const {chords} = MODES[mode];
        const chordsInKey = chords.filter((chord) => !!chord);
        if (chordsInKey.length !== 7) {
          continue;
        }
        const result = findAllPitchNames(transposition, mode);
        const resultsInKey = result.filter((name, i) => {
          const index = modulo(i - (transposition / CENTS_PER_STANDARD_SEMITONE), STANDARD_SEMITONES);
          return !!chords[index];
        })

        const resultsInKeyString = resultsInKey.join('');

        for (const letter of letters) {
          const regex = new RegExp(`${letter}`,'gi');
          const match = resultsInKeyString.match(regex);
          const length = match?.length;
          expect(length).toBeLessThan(2);
        }
      }
    }
  });
});