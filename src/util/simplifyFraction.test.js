import simplifyFraction from 'util/simplifyFraction';

describe('simplifyFraction', () => {
  const TOLERANCE = 0.00001;
  it('reduces integer numerator and denominator into smallest integers', () => {
    expect(simplifyFraction(2, 4)).toMatchObject([1, 2]);
    expect(simplifyFraction(4, 16)).toMatchObject([1, 4]);
    expect(simplifyFraction(3, 36)).toMatchObject([1, 12]);
    expect(simplifyFraction(363, 36)).toMatchObject([1, 12]);
    expect(simplifyFraction(60, 64)).toMatchObject([15, 16]);
    expect(simplifyFraction(0, 64)).toMatchObject([0, 1]);
    expect(simplifyFraction(64, 0)).toMatchObject([Infinity, 1]);

    expect(simplifyFraction(-2, 4)).toMatchObject([-1, 2]);
    expect(simplifyFraction(-4, 16)).toMatchObject([-1, 4]);
    expect(simplifyFraction(-3, 36)).toMatchObject([-1, 12]);
    expect(simplifyFraction(-363, 36)).toMatchObject([-1, 12]);
    expect(simplifyFraction(-60, 64)).toMatchObject([-15, 16]);
    expect(simplifyFraction(-0, 64)).toMatchObject([0, 1]);
    expect(simplifyFraction(-64, 0)).toMatchObject([-Infinity, 1]);

    expect(simplifyFraction(2, -4)).toMatchObject([-1, 2]);
    expect(simplifyFraction(4, -16)).toMatchObject([-1, 4]);
    expect(simplifyFraction(3, -36)).toMatchObject([-1, 12]);
    expect(simplifyFraction(363, -36)).toMatchObject([-1, 12]);
    expect(simplifyFraction(60, -64)).toMatchObject([-15, 16]);
    expect(simplifyFraction(0, -64)).toMatchObject([0, 1]);
    expect(simplifyFraction(64, -0)).toMatchObject([Infinity, 1]);
  });

  it('increases integer numerator and denominator into smallest integers', () => {
    expect(simplifyFraction(1.4, 4)).toMatchObject([7, 20]);
    expect(simplifyFraction(0.333333333, 1, TOLERANCE)).toMatchObject([1, 3]);
    expect(simplifyFraction(1 / 3, 1)).toMatchObject([1, 3]);
    expect(simplifyFraction(301 / 3, 1, TOLERANCE)).toMatchObject([1, 3]);
    expect(simplifyFraction(0, 1.33)).toMatchObject([0, 1]);
    expect(simplifyFraction(1.3, 0)).toMatchObject([Infinity, 1]);

    expect(simplifyFraction(-1.4, 4)).toMatchObject([-7, 20]);
    expect(simplifyFraction(-0.333333333, 1, TOLERANCE)).toMatchObject([-1, 3]);
    expect(simplifyFraction(-1 / 3, 1)).toMatchObject([-1, 3]);
    expect(simplifyFraction(-301 / 3, 1, TOLERANCE)).toMatchObject([-1, 3]);
    expect(simplifyFraction(-0, 1.33)).toMatchObject([0, 1]);
    expect(simplifyFraction(-1.3, 0)).toMatchObject([-Infinity, 1]);

    expect(simplifyFraction(1.4, -4)).toMatchObject([-7, 20]);
    expect(simplifyFraction(0.333333333, -1, TOLERANCE)).toMatchObject([-1, 3]);
    expect(simplifyFraction(1 / 3, -1)).toMatchObject([-1, 3]);
    expect(simplifyFraction(301 / 3, -1, TOLERANCE)).toMatchObject([-1, 3]);
    expect(simplifyFraction(0, -1.33)).toMatchObject([0, 1]);
    expect(simplifyFraction(1.3, -0)).toMatchObject([Infinity, 1]);
  });
});
