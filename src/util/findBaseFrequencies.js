import transposeFrequency from './transposeFrequency';
import {MIN_FREQ} from '../constants';

export default function(semitones, rootFrequency) {
  const frequencies = [];
  for (let i = 0; i < semitones; i++) {
    let frequency = transposeFrequency(rootFrequency, i, semitones);
    while(frequency / 2 > MIN_FREQ) {
      frequency /= 2;
    }
    frequencies.push(frequency);
  }
  return frequencies;
}
