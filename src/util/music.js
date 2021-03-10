export const MIN_FREQ = 20;
export const MAX_FREQ = 20000;
export const SEMITONES = 12;
export const PITCH_NAMES = ['A', 'A♯/B♭', 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];

export function findInterval(fA, fB) {
  const cents = SEMITONES * 100 * Math.log2(fB / fA);
  return cents;
}

export function transposeFrequency(frequency, cents) {
  return frequency * Math.pow(Math.pow(2, 1 / SEMITONES), (cents / 100));
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
