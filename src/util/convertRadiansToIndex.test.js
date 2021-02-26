import { render, screen } from '@testing-library/react';
import convertRadiansToIndex from './convertRadiansToIndex';
import {round} from '@danehansen/math';

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
    const semitones = 12;
    const RADIANS_IN_ARC = CIRC / semitones;
    const layoutIncrement = 1;
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
      const result = convertRadiansToIndex(i * RADIANS_IN_ARC, semitones, rootPitch, layoutIncrement);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of chromatic scale starting with C', function() {
    const semitones = 12;
    const RADIANS_IN_ARC = CIRC / semitones;
    const layoutIncrement = 1;
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
      const result = convertRadiansToIndex(i * RADIANS_IN_ARC, semitones, rootPitch, layoutIncrement);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of circle of fifths starting with A', function() {
    const semitones = 12;
    const RADIANS_IN_ARC = CIRC / semitones;
    const layoutIncrement = 7;
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
      const result = convertRadiansToIndex(i * RADIANS_IN_ARC, semitones, rootPitch, layoutIncrement);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });

  it('correctly idendifies indexes of circle of fifths starting with C', function() {
    const semitones = 12;
    const RADIANS_IN_ARC = CIRC / semitones;
    const layoutIncrement = 7;
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
      const result = convertRadiansToIndex(i * RADIANS_IN_ARC, semitones, rootPitch, layoutIncrement);
      const expectedResult = expectedResults[i];
      expect(result).toBe(expectedResult);
    }
  });
});
