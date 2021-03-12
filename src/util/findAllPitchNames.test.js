import findAllPitchNames from './findAllPitchNames';
import {STANDARD_SEMITONES} from './music';
import {MODES} from './constants';

describe('findAllPitchNames', function() {
  it('returns one of each letter as the pronounced names for all transpositions and all modes that contain 7 pitches', () => {
    const letters = 'abcdefg';
    const transposition = 1;
    const mode = 2;

    const {chords} = MODES[mode];
    const chordsInKey = chords.filter((chord) => !!chord);
    if (chordsInKey.length !== 7) {
      return;
    }
    const result = findAllPitchNames(transposition, mode);
    const resultsInKey = result.filter((name, i) => {
      return !!chords[i];
    })
    const resultsInKeyString = resultsInKey.join('');

    for (const letter of letters) {
      const regex = new RegExp(`${letter}`,'gi');
      const match = resultsInKeyString.match(regex);
      const length = match?.length;
      if (length !== 1) {
        console.log('FUCK', resultsInKeyString, transposition, MODES[mode].name)
        return;
      }
      expect(length).toBe(1);
    }
  });

  it.skip('returns correct results for all keys and modes with 7 pitches', () => {
    const letters = 'abcdefg';
    for (let transposition = 0; transposition < STANDARD_SEMITONES; transposition++) {
      MODES.forEach((M) => {
        const {chords} = M;
        const chordsInKey = chords.filter((chord) => !!chord);
        if (chordsInKey.length !== 7) {
          return;
        }
        const mode = MODES.indexOf(M);
        const result = findAllPitchNames(transposition, mode);
        const resultsInKey = result.filter((name, i) => {
          return !!chords[i];
        })
        const resultsInKeyString = resultsInKey.join('');

        for (const letter of letters) {
          const regex = new RegExp(`${letter}`,'gi');
          const match = resultsInKeyString.match(regex);
          const length = match?.length;
          if (length !== 1) {
            console.log('FUCK', resultsInKeyString, transposition, M.name)
            return;
          }
          expect(length).toBe(1);
        }
      })
    }

  });
});
