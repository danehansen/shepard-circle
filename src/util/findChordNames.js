import {CHORD_NAMES} from '../constants';

export default function(semitones) {
  return [...Array(semitones).keys()].map(function(i) {
    const {length} = CHORD_NAMES;
    const nameIndex = (i / semitones * length) % length;
    if (!(nameIndex % 1)) {
      return CHORD_NAMES[nameIndex];
    }
    return null;
  })
}
