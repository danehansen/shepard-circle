import {toRadians, toDegrees, toRadianDirection, toDegreeDirection} from './math';
import {RADIANS_IN_CIRCLE} from './constants';

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

describe('toRadians', function() {
  it('converts an amount of degrees to radians', function() {
    expect(toRadians(-30)).toBeCloseTo(OCLOCK_02 * -1, DIGITS);
    expect(toRadians(0)).toBe(0);
    expect(toRadians(30)).toBeCloseTo(OCLOCK_02);
    expect(toRadians(60)).toBeCloseTo(OCLOCK_02 * 2);
    expect(toRadians(90)).toBeCloseTo(OCLOCK_02 * 3);
    expect(toRadians(120)).toBeCloseTo(OCLOCK_02 * 4);
    expect(toRadians(150)).toBeCloseTo(OCLOCK_02 * 5);
    expect(toRadians(180)).toBeCloseTo(OCLOCK_02 * 6);
    expect(toRadians(210)).toBeCloseTo(OCLOCK_02 * 7);
    expect(toRadians(240)).toBeCloseTo(OCLOCK_02 * 8);
    expect(toRadians(270)).toBeCloseTo(OCLOCK_02 * 9);
    expect(toRadians(300)).toBeCloseTo(OCLOCK_02 * 10);
    expect(toRadians(330)).toBeCloseTo(OCLOCK_02 * 11);
    expect(toRadians(360)).toBeCloseTo(OCLOCK_02 * 12);
    expect(toRadians(390)).toBeCloseTo(OCLOCK_02 * 13);
  });
});

describe('toDegrees', function() {
  it('converts an amount of radians to degrees', function() {
    expect(toDegrees(OCLOCK_02 * -1)).toBeCloseTo(-30);
    expect(toDegrees(0)).toBe(0);
    expect(toDegrees(OCLOCK_02 * 1)).toBeCloseTo(30);
    expect(toDegrees(OCLOCK_02 * 2)).toBeCloseTo(60);
    expect(toDegrees(OCLOCK_02 * 3)).toBeCloseTo(90);
    expect(toDegrees(OCLOCK_02 * 4)).toBeCloseTo(120);
    expect(toDegrees(OCLOCK_02 * 5)).toBeCloseTo(150);
    expect(toDegrees(OCLOCK_02 * 6)).toBeCloseTo(180);
    expect(toDegrees(OCLOCK_02 * 7)).toBeCloseTo(210);
    expect(toDegrees(OCLOCK_02 * 8)).toBeCloseTo(240);
    expect(toDegrees(OCLOCK_02 * 9)).toBeCloseTo(270);
    expect(toDegrees(OCLOCK_02 * 10)).toBeCloseTo(300);
    expect(toDegrees(OCLOCK_02 * 11)).toBeCloseTo(330);
    expect(toDegrees(OCLOCK_02 * 12)).toBeCloseTo(360);
    expect(toDegrees(OCLOCK_02 * 13)).toBeCloseTo(390);
  });
});

describe('toRadianDirection', function() {
  it('converts a direction in degrees to radians', function() {
    expect(toRadianDirection(-30)).toBeCloseTo(OCLOCK_11);
    expect(toRadianDirection(0)).toBe(OCLOCK_12);
    expect(toRadianDirection(30)).toBeCloseTo(OCLOCK_01);
    expect(toRadianDirection(60)).toBeCloseTo(OCLOCK_02);
    expect(toRadianDirection(90)).toBeCloseTo(OCLOCK_03);
    expect(toRadianDirection(120)).toBeCloseTo(OCLOCK_04);
    expect(toRadianDirection(150)).toBeCloseTo(OCLOCK_05);
    expect(toRadianDirection(180)).toBeCloseTo(OCLOCK_06);
    expect(toRadianDirection(210)).toBeCloseTo(OCLOCK_07);
    expect(toRadianDirection(240)).toBeCloseTo(OCLOCK_08);
    expect(toRadianDirection(270)).toBeCloseTo(OCLOCK_09);
    expect(toRadianDirection(300)).toBeCloseTo(OCLOCK_10);
    expect(toRadianDirection(330)).toBeCloseTo(OCLOCK_11);
    expect(toRadianDirection(360)).toBeCloseTo(OCLOCK_12);
    expect(toRadianDirection(390)).toBeCloseTo(OCLOCK_01);
  });
});

describe('toDegreeDirection', function() {
  it('converts a direction in radians to degrees', function() {
    expect(toDegreeDirection(OCLOCK_02 * -1)).toBeCloseTo(120);
    expect(toDegreeDirection(OCLOCK_02 * 0)).toBeCloseTo(90);
    expect(toDegreeDirection(OCLOCK_02 * 1)).toBeCloseTo(60);
    expect(toDegreeDirection(OCLOCK_02 * 2)).toBeCloseTo(30);
    expect(toDegreeDirection(OCLOCK_02 * 3)).toBeCloseTo(0);
    expect(toDegreeDirection(OCLOCK_02 * 4)).toBeCloseTo(330);
    expect(toDegreeDirection(OCLOCK_02 * 5)).toBeCloseTo(300);
    expect(toDegreeDirection(OCLOCK_02 * 6)).toBeCloseTo(270);
    expect(toDegreeDirection(OCLOCK_02 * 7)).toBeCloseTo(240);
    expect(toDegreeDirection(OCLOCK_02 * 8)).toBeCloseTo(210);
    expect(toDegreeDirection(OCLOCK_02 * 9)).toBeCloseTo(180);
    expect(toDegreeDirection(OCLOCK_02 * 10)).toBeCloseTo(150);
    expect(toDegreeDirection(OCLOCK_02 * 11)).toBeCloseTo(120);
    expect(toDegreeDirection(OCLOCK_02 * 12)).toBeCloseTo(90);
    expect(toDegreeDirection(OCLOCK_02 * 13)).toBeCloseTo(60);
  });
});
