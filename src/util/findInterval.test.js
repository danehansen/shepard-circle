import findInterval from './findInterval';
import {round} from '@danehansen/math';
import {toRadians, toDegrees, toRadianDirection, toDegreeDirection} from './math';

describe('findInterval', function() {
  // root note
  const A5 = 880;
  const A4 = A5 / 2;
  const A3 = A4 / 2;

  // perfect fifth of A
  const E6 = 1318.51; // 1320
  const E5 = E6 / 2; // 660
  const E4 = E5 / 2; // 330
  const E3 = E4 / 2; // 165

  // A is perfect fifth of D
  const D5 = 587.33; // 586.67
  const D4 = D5 / 2; // 293.33
  const D3 = D4 / 2; // 146.67

// a perfect fifth is
// 2 / 3
// A / E
// small / large

  it('returns a perfect fifth when fifth is 2 higher after root', function() {
    const result = findInterval(A4, E6);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);

    const result2 = findInterval(E6, A4);
    expect(result2[0]).toBe(3);
    expect(result2[1]).toBe(2);
  });

  it('returns a perfect fifth when fifth is next highest after root', function() {
    const result = findInterval(A4, E5);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);

    const result2 = findInterval(E5, A4);
    expect(result2[0]).toBe(3);
    expect(result2[1]).toBe(2);
  });

  it('returns a perfect fifth when fifth is next lowest after root', function() {
    const result = findInterval(A4, E4);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);

    const result2 = findInterval(E4, A4);
    expect(result2[0]).toBe(3);
    expect(result2[1]).toBe(2);
  });

  it('returns a perfect fifth when fifth is 2 lower after root', function() {
    const result = findInterval(A4, E3);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3);

    const result2 = findInterval(E3, A4);
    expect(result2[0]).toBe(3);
    expect(result2[1]).toBe(2);
  });
});
