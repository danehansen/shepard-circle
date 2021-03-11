import {round} from '@danehansen/math';
import {STANDARD_PITCH_NAMES, STANDARD_SEMITONES, CENTS_PER_STANDARD_SEMITONE} from './music';

export default function findPitchNames(semitones, transposition) {
  return [...Array(semitones).keys()].map(function(i) {
    const nameIndexFloat = (i / semitones * STANDARD_SEMITONES + (transposition / CENTS_PER_STANDARD_SEMITONE)) % STANDARD_SEMITONES;
    const nameIndex = Math.floor(nameIndexFloat);
    const prefix = STANDARD_PITCH_NAMES[nameIndex];
    const remainder = nameIndexFloat % 1;
    if (!remainder) {
      return prefix;
    }
    return `${prefix}${String(round(remainder, 0.001)).slice(1,5)}`;
  })
}
