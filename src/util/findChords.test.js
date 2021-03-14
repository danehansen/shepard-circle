import findChords from './findChords';
import {STANDARD_SEMITONES} from './music';


describe('findChords', function() {
  it('returns correct chords', function() {
    const pitchNames = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    let pitches;
    let semitones;
    let result;
    let expectedResult;

    //progress checks
    let bloatedResult;
    let pitchesSorted;
    let pitchesSortedScaled;
    let inversions;

    pitches = [8, 5, 1]; // major chord
    semitones = 12;
    result = findChords(pitches, semitones, pitchNames);
    expectedResult = [
      {
        name:'A#',
        fingersNeeded: 0,
      },
    ];
    bloatedResult = {
      pitchesSorted: [1, 5, 8],
      pitchesSortedScaled: [100, 500, 800],
      inversions: [
        [100, 500, 800],
        [500, 800, 100],
        [800, 100, 500],
      ],
      matchingChords: expectedResult,
    };
    expect(result).toMatchObject(expectedResult);

    pitches = [2, 9]; // power chord
    semitones = 12;
    result = findChords(pitches, semitones, pitchNames);
    expectedResult = [
      {
        name:'B5',
        fingersNeeded: 0,
      },
      {
        name:'B',
        fingersNeeded: 1,
      },
      {
        name:'b',
        fingersNeeded: 1,
      },
    ];
    bloatedResult = {
      pitchesSorted: [2,9],
      pitchesSortedScaled: [200, 900],
      inversions: [
        [200, 900],
        [900, 200],
      ],
      matchingChords: expectedResult,
    };
    expect(result).toMatchObject(expectedResult);

    pitches = [5, 3, 1]; // augmented
    semitones = 6;
    result = findChords(pitches, semitones, pitchNames);
    expectedResult = [
      {
        name:'A#+',
        fingersNeeded: 0,
      },
      {
        name:'C+',
        fingersNeeded: 0,
      },
      {
        name:'D+',
        fingersNeeded: 0,
      },
    ];
    bloatedResult = {
      pitchesSorted: [1, 3, 5],
      pitchesSortedScaled: [200, 600, 1000],
      inversions: [
        [200, 600, 1000],
        [600, 1000, 200],
        [1000, 200, 600],
      ],
      matchingChords: expectedResult,
    };
    expect(result).toMatchObject(expectedResult);
  });
});
