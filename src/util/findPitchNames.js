import {round} from '@danehansen/math';
import {PITCH_NAMES} from '../constants';
import {SEMITONES} from './music';

export default function findPitchNames(semitones, transposition) {
  return [...Array(semitones).keys()].map(function(i) {
    const nameIndexFloat = (i / semitones * SEMITONES + transposition) % SEMITONES;
    const nameIndex = Math.floor(nameIndexFloat);
    const prefix = PITCH_NAMES[nameIndex];
    const remainder = nameIndexFloat % 1;
    if (!remainder) {
      return prefix;
    }
    return `${prefix}${String(round(remainder, 0.001)).slice(1,5)}`;
  })
}
