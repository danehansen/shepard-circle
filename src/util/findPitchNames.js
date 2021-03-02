import {round} from '@danehansen/math';

const NAMES = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];

export default function(semitones) {
  return [...Array(semitones).keys()].map(function(i) {
    const nameIndexFloat = i / semitones * NAMES.length;
    const nameIndex = Math.floor(nameIndexFloat);
    const prefix = NAMES[nameIndex];
    const remainder = nameIndexFloat % 1;
    if (!remainder) {
      return prefix;
    }
    return `${prefix}${String(round(remainder, 0.001)).slice(1,5)}`;
  })
}
