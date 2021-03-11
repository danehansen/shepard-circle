import convertIndexToRadians from './convertIndexToRadians';
import {STANDARD_SEMITONES} from './music';
import {RADIANS_IN_CIRCLE} from './constants';

describe('convertIndexToRadians', function() {
  const DIGITS = 3;

  const OCLOCK_12 = 3 * RADIANS_IN_CIRCLE / 12; // 1.571
  const OCLOCK_01 = 2 * RADIANS_IN_CIRCLE / 12; // 1.047
  const OCLOCK_02 = 1 * RADIANS_IN_CIRCLE / 12; // 0.524
  const OCLOCK_03 = 0 * RADIANS_IN_CIRCLE / 12; // 0.000
  const OCLOCK_04 = 11 * RADIANS_IN_CIRCLE / 12; // 5.760
  const OCLOCK_05 = 10 * RADIANS_IN_CIRCLE / 12; // 5.236
  const OCLOCK_06 = 9 * RADIANS_IN_CIRCLE / 12; // 4.712
  const OCLOCK_07 = 8 * RADIANS_IN_CIRCLE / 12; // 4.189
  const OCLOCK_08 = 7 * RADIANS_IN_CIRCLE / 12; // 3.665
  const OCLOCK_09 = 6 * RADIANS_IN_CIRCLE / 12; // 3.142
  const OCLOCK_10 = 5 * RADIANS_IN_CIRCLE / 12; // 2.618
  const OCLOCK_11 = 4 * RADIANS_IN_CIRCLE / 12; // 2.094

  it('correctly postions chromatic scale starting with A', function() {
    const semitones = STANDARD_SEMITONES;
    const pitchSkip = 1;
    const rootPitch = 0;
    const expectedResults = [
      OCLOCK_12,
      OCLOCK_01,
      OCLOCK_02,
      OCLOCK_03,
      OCLOCK_04,
      OCLOCK_05,
      OCLOCK_06,
      OCLOCK_07,
      OCLOCK_08,
      OCLOCK_09,
      OCLOCK_10,
      OCLOCK_11,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertIndexToRadians(i, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBeCloseTo(expectedResult, DIGITS);
    }
  });

  it('correctly postions chromatic scale starting with C', function() {
    const semitones = STANDARD_SEMITONES;
    const pitchSkip = 1;
    const rootPitch = 3;
    const expectedResults = [
      OCLOCK_09,
      OCLOCK_10,
      OCLOCK_11,
      OCLOCK_12,
      OCLOCK_01,
      OCLOCK_02,
      OCLOCK_03,
      OCLOCK_04,
      OCLOCK_05,
      OCLOCK_06,
      OCLOCK_07,
      OCLOCK_08,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertIndexToRadians(i, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBeCloseTo(expectedResult, DIGITS);
    }
  });

  it('correctly postions circle of fifths starting with A', function() {
    const semitones = STANDARD_SEMITONES;
    const pitchSkip = 7;
    const rootPitch = 0;
    const expectedResults = [
      OCLOCK_12,
      OCLOCK_07,
      OCLOCK_02,
      OCLOCK_09,
      OCLOCK_04,
      OCLOCK_11,
      OCLOCK_06,
      OCLOCK_01,
      OCLOCK_08,
      OCLOCK_03,
      OCLOCK_10,
      OCLOCK_05,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertIndexToRadians(i, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBeCloseTo(expectedResult, DIGITS);
    }
  });

  it('correctly postions circle of fifths starting with C', function() {
    const semitones = STANDARD_SEMITONES;
    const pitchSkip = 7;
    const rootPitch = 3;
    const expectedResults = [
      OCLOCK_03,
      OCLOCK_10,
      OCLOCK_05,
      OCLOCK_12,
      OCLOCK_07,
      OCLOCK_02,
      OCLOCK_09,
      OCLOCK_04,
      OCLOCK_11,
      OCLOCK_06,
      OCLOCK_01,
      OCLOCK_08,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertIndexToRadians(i, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBeCloseTo(expectedResult, DIGITS);
    }
  });
});
