import convertRadiansToIndex from './convertRadiansToIndex';
import {round, modulo} from '@danehansen/math';
import {toRadianDirection} from './math';
import {SEMITONES} from './music';

describe('convertRadiansToIndex', function() {
  const CIRC = Math.PI * 2;
  const ROUND = 0.001;

  const OCLOCK_12 = 3 * CIRC / 12; // 1.571
  const OCLOCK_01 = 2 * CIRC / 12; // 1.047
  const OCLOCK_02 = 1 * CIRC / 12; // 0.524
  const OCLOCK_03 = 0 * CIRC / 12; // 0.000
  const OCLOCK_04 = 11 * CIRC / 12; // 5.760
  const OCLOCK_05 = 10 * CIRC / 12; // 5.236
  const OCLOCK_06 = 9 * CIRC / 12; // 4.712
  const OCLOCK_07 = 8 * CIRC / 12; // 4.189
  const OCLOCK_08 = 7 * CIRC / 12; // 3.665
  const OCLOCK_09 = 6 * CIRC / 12; // 3.142
  const OCLOCK_10 = 5 * CIRC / 12; // 2.618
  const OCLOCK_11 = 4 * CIRC / 12; // 2.094

  it('correctly identifies indexes of chromatic scale starting with A', function() {
    const semitones = SEMITONES;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const pitchSkip = 1;
    const rootPitch = 0;
    const expectedResults = [
      3,
      2,
      1,
      0,
      11,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertRadiansToIndex(i * RADIANS_IN_SLICE, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of chromatic scale starting with C', function() {
    const semitones = SEMITONES;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const pitchSkip = 1;
    const rootPitch = 3;
    const expectedResults = [
      6,
      5,
      4,
      3,
      2,
      1,
      0,
      11,
      10,
      9,
      8,
      7,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertRadiansToIndex(i * RADIANS_IN_SLICE, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of circle of fifths starting with A', function() {
    const semitones = SEMITONES;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const pitchSkip = 7;
    const rootPitch = 0;
    const expectedResults = [
      9,
      2,
      7,
      0,
      5,
      10,
      3,
      8,
      1,
      6,
      11,
      4,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertRadiansToIndex(i * RADIANS_IN_SLICE, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of circle of fifths starting with C', function() {
    const semitones = SEMITONES;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const pitchSkip = 7;
    const rootPitch = 3;
    const expectedResults = [
      0,
      5,
      10,
      3,
      8,
      1,
      6,
      11,
      4,
      9,
      2,
      7,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const result = convertRadiansToIndex(i * RADIANS_IN_SLICE, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly identifies indexes of 11 pitch scale starting with A', function() {
    const semitones = 11;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const DEGREES_IN_SLICE = 360 / semitones;
    const pitchSkip = 1;
    const rootPitch = 0;
    const expectedResults = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const degrees = DEGREES_IN_SLICE * i * pitchSkip;
      const radians = toRadianDirection(degrees);
      const result = convertRadiansToIndex(radians, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly identifies indexes of 11 pitch scale starting with D', function() {
    const semitones = 11;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const DEGREES_IN_SLICE = 360 / semitones;
    const pitchSkip = 1;
    const rootPitch = 3;
    const expectedResults = [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      0,
      1,
      2,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const degrees = DEGREES_IN_SLICE * i * pitchSkip;
      const radians = toRadianDirection(degrees);
      const result = convertRadiansToIndex(radians, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it.skip('correctly identifies indexes of 11 pitch scale starting with D incrementing by 3', function() {
    const semitones = 11;
    const RADIANS_IN_SLICE = CIRC / semitones;
    const DEGREES_IN_SLICE = 360 / semitones;
    const pitchSkip = 3;
    const rootPitch = 3;
    const expectedResults = [
      3,
      7,
      0,
      4,
      8,
      1,
      5,
      9,
      2,
      6,
      10,
    ];

    for (let i = 0; i < expectedResults.length; i++) {
      const degrees = modulo(DEGREES_IN_SLICE * (i - rootPitch) * pitchSkip, 360);
      const radians = toRadianDirection(degrees);
      const result = convertRadiansToIndex(radians, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      // console.log('test', i, round(degrees, ROUND), round(radians, ROUND), result, expectedResults[i]);
      expect(result).toBe(expectedResult);
    }
  });
});
