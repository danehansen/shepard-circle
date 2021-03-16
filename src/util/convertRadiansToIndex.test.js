import convertRadiansToIndex from './convertRadiansToIndex';
import { modulo, toRadianDirection} from '@danehansen/math';
import {STANDARD_SEMITONES} from './music';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from './constants';

describe('convertRadiansToIndex', function() {
  it('correctly identifies indexes of chromatic scale starting with A', function() {
    const semitones = STANDARD_SEMITONES;
    const RADIANS_IN_SLICE = RADIANS_IN_CIRCLE / semitones;
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
    const semitones = STANDARD_SEMITONES;
    const RADIANS_IN_SLICE = RADIANS_IN_CIRCLE / semitones;
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
    const semitones = STANDARD_SEMITONES;
    const RADIANS_IN_SLICE = RADIANS_IN_CIRCLE / semitones;
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
    const semitones = STANDARD_SEMITONES;
    const RADIANS_IN_SLICE = RADIANS_IN_CIRCLE / semitones;
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
    const DEGREES_IN_SLICE = DEGREES_IN_CIRCLE / semitones;
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
    const DEGREES_IN_SLICE = DEGREES_IN_CIRCLE / semitones;
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
    const DEGREES_IN_SLICE = DEGREES_IN_CIRCLE / semitones;
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
      const degrees = modulo(DEGREES_IN_SLICE * (i - rootPitch) * pitchSkip, DEGREES_IN_CIRCLE);
      const radians = toRadianDirection(degrees);
      const result = convertRadiansToIndex(radians, semitones, rootPitch, pitchSkip);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });
});
