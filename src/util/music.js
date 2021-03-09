export const MIN_FREQ = 20;
export const MAX_FREQ = 20000;
export const SEMITONES = 12;
export const EQ_FREQUENCIES = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384];

export function findCents(fA, fB) {
  return 1200 * Math.log2(fB / fA);
}

export const A4 = {
  415: 'baroque',
  427: 'classical',
  428: 'classical',
  429: 'classical',
  430: 'classical',
  430.54: 'scientific',
  432: '“frequency of the universe”',
  435: 'diapson normal',
  439: 'new philharmonic',
  440: 'stuttgart',
  452: 'old philharmonic',
  466: 'chorton',
  DEFAULT: 440,
};
