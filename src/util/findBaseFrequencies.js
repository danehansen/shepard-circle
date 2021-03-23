import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE, transposeFrequency} from './music';
import findBaseFrequency from './findBaseFrequency';

export default function findBaseFrequencies(semitones, rootFrequency) {
  const frequencies = [];
  for (let i = 0; i < semitones; i++) {
    frequencies.push(findBaseFrequency(transposeFrequency(rootFrequency, i * CENTS_PER_STANDARD_SEMITONE * (STANDARD_SEMITONES / semitones))));
  }
  return frequencies;
}
