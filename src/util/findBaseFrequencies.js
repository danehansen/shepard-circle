import {MIN_FREQ, transposeFrequency} from './music';

export default function findBaseFrequencies(cents, rootFrequency) {
  const frequencies = [];
  for (let i = 0; i < cents; i += 100) {
    let frequency = transposeFrequency(rootFrequency, i, cents);
    while(frequency / 2 > MIN_FREQ) {
      frequency /= 2;
    }
    frequencies.push(frequency);
  }
  return frequencies;
}
