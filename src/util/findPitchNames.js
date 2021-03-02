import {round} from '@danehansen/math';

const NAMES = ['A', 'A♯/B♭', 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];

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
