import {MIN_FREQ, transposeFrequency} from './music';

export default function findBaseFrequencies(semitones, rootFrequency) {
  const frequencies = [];
  for (let i = 0; i < semitones; i++) {
    let frequency = transposeFrequency(rootFrequency, i * 100);
    while(frequency / 2 > MIN_FREQ) {
      frequency /= 2;
    }
    frequencies.push(frequency);
  }
  return frequencies;
}
