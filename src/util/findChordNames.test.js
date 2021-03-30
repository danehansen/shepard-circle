import findChordNames from 'util/findChordNames';

describe('findChordNames', function() {
  it('returns correct results', function() {
    let semitones;
    let modeIndex;
    let pitchSkip;
    let expectedResult;

    semitones = 12;
    modeIndex = 1;
    pitchSkip = 1;
    expectedResult = ['I', null, 'ii', null, 'iii', 'IV', null, 'V', null, 'vi', null, 'viiº'];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);

    semitones = 12;
    modeIndex = 1;
    pitchSkip = 7;
    expectedResult = ['I', 'V', 'ii', 'vi', 'iii', 'viiº', null, null, null, null, null, 'IV'];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);

    semitones = 12;
    modeIndex = 2;
    pitchSkip = 1;
    expectedResult = ['i', null, 'ii', 'III', null, 'IV', null, 'v', null, 'viº', 'VII', null];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);

    semitones = 12;
    modeIndex = 2;
    pitchSkip = 7;
    expectedResult = ['i', 'v', 'ii', 'viº', null, null, null, null, null, 'III', 'VII', 'IV'];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);

    semitones = 6;
    modeIndex = 1;
    pitchSkip = 1;
    expectedResult = ['I', 'ii', 'iii', null, null, null];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);

    semitones = 6;
    modeIndex = 1;
    pitchSkip = 5;
    expectedResult = ['I', null, null, null, 'iii', 'ii'];
    expect(findChordNames(semitones, modeIndex, pitchSkip)).toMatchObject(expectedResult);
  });
});
