import {MODES} from './constants';

export default function findChordNames(semitones, modeIndex) {
  const {chords} = MODES[modeIndex]
  const {length} = chords;
  return chords.map(function(name, index) {
    const nameIndex = (index / semitones * length) % length;
    if (!(nameIndex % 1)) {
      return chords[nameIndex];
    }
    return null;
  })
}
