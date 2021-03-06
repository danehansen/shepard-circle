import {findCents} from './music';

describe('findCents', function() {
  it('converts an amount of degrees to radians', function() {
    const A4 = 440;
    const B4 = 493.88;
    const C5 = 523.25;
    const D5 = 587.32;
    const E5 = 659.26;
    const F5 = 698.46;
    const G5 = 783.99;
    const A5 = 880;

    expect(Math.abs(findCents(A4, B4) - 200)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, C5) - 300)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, D5) - 500)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, E5) - 700)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, F5) - 800)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, G5) - 1000)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A4, A5) - 1200)).toBeLessThan(0.1);

    expect(Math.abs(findCents(A5, A4) - -1200)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, G5) - -200)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, F5) - -400)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, E5) - -500)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, D5) - -700)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, C5) - -900)).toBeLessThan(0.1);
    expect(Math.abs(findCents(A5, B4) - -1000)).toBeLessThan(0.1);
  });
});
