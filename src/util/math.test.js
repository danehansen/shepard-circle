import {round} from '@danehansen/math';
import {toRadians, toDegrees, toRadianDirection, toDegreeDirection} from './math';

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

describe('toRadians', function() {
  it('converts an amount of degrees to radians', function() {
    expect(round(toRadians(-30), ROUND)).toBe(round(OCLOCK_02 * -1, ROUND));
    expect(toRadians(0)).toBe(0);
    expect(round(toRadians(30), ROUND)).toBe(round(OCLOCK_02, ROUND));
    expect(round(toRadians(60), ROUND)).toBe(round(OCLOCK_02 * 2, ROUND));
    expect(round(toRadians(90), ROUND)).toBe(round(OCLOCK_02 * 3, ROUND));
    expect(round(toRadians(120), ROUND)).toBe(round(OCLOCK_02 * 4, ROUND));
    expect(round(toRadians(150), ROUND)).toBe(round(OCLOCK_02 * 5, ROUND));
    expect(round(toRadians(180), ROUND)).toBe(round(OCLOCK_02 * 6, ROUND));
    expect(round(toRadians(210), ROUND)).toBe(round(OCLOCK_02 * 7, ROUND));
    expect(round(toRadians(240), ROUND)).toBe(round(OCLOCK_02 * 8, ROUND));
    expect(round(toRadians(270), ROUND)).toBe(round(OCLOCK_02 * 9, ROUND));
    expect(round(toRadians(300), ROUND)).toBe(round(OCLOCK_02 * 10, ROUND));
    expect(round(toRadians(330), ROUND)).toBe(round(OCLOCK_02 * 11, ROUND));
    expect(round(toRadians(360), ROUND)).toBe(round(OCLOCK_02 * 12, ROUND));
    expect(round(toRadians(390), ROUND)).toBe(round(OCLOCK_02 * 13, ROUND));
  });
});

describe('toDegrees', function() {
  it('converts an amount of radians to degrees', function() {
    expect(round(toDegrees(OCLOCK_02 * -1), ROUND)).toBe(-30);
    expect(toDegrees(0)).toBe(0);
    expect(round(toDegrees(OCLOCK_02 * 1), ROUND)).toBe(30);
    expect(round(toDegrees(OCLOCK_02 * 2), ROUND)).toBe(60);
    expect(round(toDegrees(OCLOCK_02 * 3), ROUND)).toBe(90);
    expect(round(toDegrees(OCLOCK_02 * 4), ROUND)).toBe(120);
    expect(round(toDegrees(OCLOCK_02 * 5), ROUND)).toBe(150);
    expect(round(toDegrees(OCLOCK_02 * 6), ROUND)).toBe(180);
    expect(round(toDegrees(OCLOCK_02 * 7), ROUND)).toBe(210);
    expect(round(toDegrees(OCLOCK_02 * 8), ROUND)).toBe(240);
    expect(round(toDegrees(OCLOCK_02 * 9), ROUND)).toBe(270);
    expect(round(toDegrees(OCLOCK_02 * 10), ROUND)).toBe(300);
    expect(round(toDegrees(OCLOCK_02 * 11), ROUND)).toBe(330);
    expect(round(toDegrees(OCLOCK_02 * 12), ROUND)).toBe(360);
    expect(round(toDegrees(OCLOCK_02 * 13), ROUND)).toBe(390);
  });
});

describe('toRadianDirection', function() {
  it('converts a direction in degrees to radians', function() {
    expect(round(toRadianDirection(-30), ROUND)).toBe(round(OCLOCK_11, ROUND));
    expect(round(toRadianDirection(0), ROUND)).toBe(round(OCLOCK_12, ROUND));
    expect(round(toRadianDirection(30), ROUND)).toBe(round(OCLOCK_01, ROUND));
    expect(round(toRadianDirection(60), ROUND)).toBe(round(OCLOCK_02, ROUND));
    expect(round(toRadianDirection(90), ROUND)).toBe(round(OCLOCK_03, ROUND));
    expect(round(toRadianDirection(120), ROUND)).toBe(round(OCLOCK_04, ROUND));
    expect(round(toRadianDirection(150), ROUND)).toBe(round(OCLOCK_05, ROUND));
    expect(round(toRadianDirection(180), ROUND)).toBe(round(OCLOCK_06, ROUND));
    expect(round(toRadianDirection(210), ROUND)).toBe(round(OCLOCK_07, ROUND));
    expect(round(toRadianDirection(240), ROUND)).toBe(round(OCLOCK_08, ROUND));
    expect(round(toRadianDirection(270), ROUND)).toBe(round(OCLOCK_09, ROUND));
    expect(round(toRadianDirection(300), ROUND)).toBe(round(OCLOCK_10, ROUND));
    expect(round(toRadianDirection(330), ROUND)).toBe(round(OCLOCK_11, ROUND));
    expect(round(toRadianDirection(360), ROUND)).toBe(round(OCLOCK_12, ROUND));
    expect(round(toRadianDirection(390), ROUND)).toBe(round(OCLOCK_01, ROUND));
  });
});

describe('toDegreeDirection', function() {
  it('converts a direction in radians to degrees', function() {
    expect(round(toDegreeDirection(OCLOCK_02 * -1), ROUND)).toBe(120);
    expect(round(toDegreeDirection(OCLOCK_02 * 0), ROUND)).toBe(90);
    expect(round(toDegreeDirection(OCLOCK_02 * 1), ROUND)).toBe(60);
    expect(round(toDegreeDirection(OCLOCK_02 * 2), ROUND)).toBe(30);
    expect(round(toDegreeDirection(OCLOCK_02 * 3), ROUND)).toBe(0);
    expect(round(toDegreeDirection(OCLOCK_02 * 4), ROUND)).toBe(330);
    expect(round(toDegreeDirection(OCLOCK_02 * 5), ROUND)).toBe(300);
    expect(round(toDegreeDirection(OCLOCK_02 * 6), ROUND)).toBe(270);
    expect(round(toDegreeDirection(OCLOCK_02 * 7), ROUND)).toBe(240);
    expect(round(toDegreeDirection(OCLOCK_02 * 8), ROUND)).toBe(210);
    expect(round(toDegreeDirection(OCLOCK_02 * 9), ROUND)).toBe(180);
    expect(round(toDegreeDirection(OCLOCK_02 * 10), ROUND)).toBe(150);
    expect(round(toDegreeDirection(OCLOCK_02 * 11), ROUND)).toBe(120);
    expect(round(toDegreeDirection(OCLOCK_02 * 12), ROUND)).toBe(90);
    expect(round(toDegreeDirection(OCLOCK_02 * 13), ROUND)).toBe(60);
  });
});
