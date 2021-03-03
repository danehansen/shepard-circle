import { render, screen } from '@testing-library/react';
import convertIndexToRadians from './convertIndexToRadians';
import {round} from '@danehansen/math';

describe('convertIndexToRadians', function() {
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

  it('correctly postions chromatic scale starting with A', function() {
    const semitones = 12;
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
      const resultRounded = round(result, ROUND);
      const expectedResult = expectedResults[i];
      const expectedResultRounded = round(expectedResult, ROUND);
      expect(resultRounded).toBe(expectedResultRounded);
    }
  });

  it('correctly postions chromatic scale starting with C', function() {
    const semitones = 12;
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
      const resultRounded = round(result, ROUND);
      const expectedResult = expectedResults[i];
      const expectedResultRounded = round(expectedResult, ROUND);
      expect(resultRounded).toBe(expectedResultRounded);
    }
  });

  it('correctly postions circle of fifths starting with A', function() {
    const semitones = 12;
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
      const resultRounded = round(result, ROUND);
      const expectedResult = expectedResults[i];
      const expectedResultRounded = round(expectedResult, ROUND);
      expect(resultRounded).toBe(expectedResultRounded);
    }
  });

  it('correctly postions circle of fifths starting with C', function() {
    const semitones = 12;
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
      const resultRounded = round(result, ROUND);
      const expectedResult = expectedResults[i];
      const expectedResultRounded = round(expectedResult, ROUND);
      expect(resultRounded).toBe(expectedResultRounded);
    }
  });
});
