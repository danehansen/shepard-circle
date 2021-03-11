import {findInterval, STANDARD_A4} from './music';

describe('findInterval', function() {
  it('converts an amount of degrees to radians', function() {
    const A4 = STANDARD_A4;
    const B4 = 493.88;
    const C5 = 523.25;
    const D5 = 587.32;
    const E5 = 659.26;
    const F5 = 698.46;
    const G5 = 783.99;
    const A5 = A4 * 2;

    expect(Math.abs(findInterval(A4, B4) - 200)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, C5) - 300)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, D5) - 500)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, E5) - 700)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, F5) - 800)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, G5) - 1000)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A4, A5) - 1200)).toBeLessThan(0.1);

    expect(Math.abs(findInterval(A5, A4) - -1200)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, G5) - -200)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, F5) - -400)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, E5) - -500)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, D5) - -700)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, C5) - -900)).toBeLessThan(0.1);
    expect(Math.abs(findInterval(A5, B4) - -1000)).toBeLessThan(0.1);
  });
});
