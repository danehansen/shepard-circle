export const HUMAN_CENT_THRESHOLD = 5;
export const HUMAN_MIN_FREQ = 20;
export const HUMAN_MAX_FREQ = 20000;
export const STANDARD_SEMITONES = 12;
export const STANDARD_A4 = 440;
export const CENTS_PER_STANDARD_SEMITONE = 100;
export const CENTS_PER_OCTAVE = STANDARD_SEMITONES * CENTS_PER_STANDARD_SEMITONE;

export function findInterval(fA, fB) {
  const cents = CENTS_PER_OCTAVE * Math.log2(fB / fA);
  return cents;
}

export function transposeFrequency(frequency, cents) {
  return frequency * Math.pow(Math.pow(2, 1 / STANDARD_SEMITONES), (cents / CENTS_PER_STANDARD_SEMITONE));
}

export function findFrequency(str) {
  // TODO
}
