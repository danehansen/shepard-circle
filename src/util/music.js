export const MIN_FREQ = 20;
export const MAX_FREQ = 20000;
export const A4 = 440;

export function findCents(fA, fB) {
  return 1200 * Math.log2(fB / fA);
}
