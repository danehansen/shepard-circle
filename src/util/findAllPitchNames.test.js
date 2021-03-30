import findAllPitchNames from 'util/findAllPitchNames';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from 'util/music';
import {MODES} from './constants';
import {modulo} from '@danehansen/math';

describe('findAllPitchNames', function() {
  it.skip('returns correct results for all keys and modes with 7 pitches', () => {
    const letters = 'abcdefg';
    const startingTransposition = 0;
    const endingTransposition = 1100;
    const startingMode = 0;
    const endingMode = MODES.length - 1;

    for (let transposition = startingTransposition; transposition <= endingTransposition; transposition += CENTS_PER_STANDARD_SEMITONE) {
      for (let modeIndex = startingMode; modeIndex <= endingMode; modeIndex++) {
        const {chords} = MODES[modeIndex];
        const chordsInKey = chords.filter((chord) => !!chord);
        if (chordsInKey.length !== 7) {
          continue;
        }
        const result = findAllPitchNames(transposition, modeIndex);
        const resultsInKey = result.filter((name, i) => {
          const index = modulo(i - (transposition / CENTS_PER_STANDARD_SEMITONE), STANDARD_SEMITONES);
          return !!chords[index];
        })

        const resultsInKeyString = resultsInKey.join('');

        for (const letter of letters) {
          const regex = new RegExp(`${letter}`,'gi');
          const match = resultsInKeyString?.match(regex);
          const {length} = match.length;
          expect(length).toBeLessThan(2);
        }
      }
    }
  });

  it('returns correct results for known keys', () => {
    const SHARPS = ['A','A♯','B','C','C♯','D','D♯','E','F','F♯','G','G♯'];
    const FLATS = ['A','B♭','B','C','D♭','D','E♭','E','F','G♭','G','A♭'];
    const expectedResults = [
      SHARPS, // A/f♯
      FLATS, // B♭/g
      SHARPS, // B/g♯
      SHARPS, // C/a
      ['A','A♯','B','B♯','C♯','D','D♯','E','E♯','F♯','G','G♯'], // C♯/a♯
      SHARPS, // D/b
      FLATS, // E♭/c
      SHARPS, // E/c♯
      FLATS, // F/d
      ['A','A♯','B','C','C♯','D','D♯','E','E♯','F♯','G','G♯'], // F♯/d♯
      SHARPS, // G/e
      ['A','A♯','B','B♯','C♯','D','D♯','E','E♯','F♯♯','G','G♯'], // G♯/e♯
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const majorTransposition = i * 100;
      expect(findAllPitchNames(majorTransposition, 1)).toMatchObject(expectedResults[i]);
      const minorTransposition = (majorTransposition + 900) % 1200;
      expect(findAllPitchNames(minorTransposition, 6)).toMatchObject(expectedResults[i]);
    }
  })
});
