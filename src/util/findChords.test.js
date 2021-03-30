import findChords from 'util/findChords';
import {CHORD_TYPES} from 'util/constants';

describe('findChords', function() {
  const pitchNames = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
  const chordTypes = CHORD_TYPES.slice(0,2);

  it('returns correct chords', () => {
    let pitches;
    let semitones;
    let result;
    let expectedResult;

    pitches = [3, 6]
    semitones = 12;
    result = findChords(pitches, semitones, pitchNames, chordTypes);
    expectedResult = [
      {
        chordIndex: 0,
        fingersNeeded: 1,
        name: 'G#',
        rootPitch: 11,
      },
      {
        chordIndex: 1,
        fingersNeeded: 1,
        name: 'c',
        rootPitch: 3,
      },
    ];
    expect(result).toMatchObject(expectedResult);
  })
});
