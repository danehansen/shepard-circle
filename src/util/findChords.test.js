import findChords from './findChords';
import {STANDARD_SEMITONES} from './music';


describe('findChords', function() {
  it('returns correct chords', function() {
    const pitches = [];
    const semitones = 12;
    const pitchNames = [];
    const result = findChords(pitches, semitones, pitchNames);
    const expectedResult = [];

    expect(result).toMatchObject(expectedResult);
  });
});
