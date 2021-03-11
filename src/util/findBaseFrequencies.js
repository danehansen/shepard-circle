import {HUMAN_MIN_FREQ, STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE, transposeFrequency} from './music';

export default function findBaseFrequencies(semitones, rootFrequency) {
  const frequencies = [];
  for (let i = 0; i < semitones; i++) {
    let frequency = transposeFrequency(rootFrequency, i * CENTS_PER_STANDARD_SEMITONE * (STANDARD_SEMITONES / semitones));
    while(frequency / 2 > HUMAN_MIN_FREQ) {
      frequency /= 2;
    }
    frequencies.push(frequency);
  }
  return frequencies;
}
