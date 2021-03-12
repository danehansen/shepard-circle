import {round} from '@danehansen/math';
import {STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from './music';

export default function findPitchNames(semitones, transposition, allPitchNames) {
  return [...Array(semitones).keys()].map(function(i) {
    const nameIndexFloat = (i / semitones * STANDARD_SEMITONES + (transposition / CENTS_PER_STANDARD_SEMITONE)) % STANDARD_SEMITONES;
    const nameIndex = Math.floor(nameIndexFloat);
    const prefix = allPitchNames[nameIndex];
    const remainder = nameIndexFloat % 1;
    if (!remainder) {
      return prefix;
    }
    return `${prefix}${String(round(remainder, 0.001)).slice(1,5)}`;
  })
}
