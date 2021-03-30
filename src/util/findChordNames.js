import {MODES} from 'util/constants';

export default function findChordNames(semitones, modeIndex, pitchSkip) {
  const twelveChordsInMode = [...MODES[modeIndex].chords];
  const semitonesChordsInMode = [];
  for (let i = 0; i < semitones; i++) {
    const index = i / semitones * twelveChordsInMode.length;
    semitonesChordsInMode.push(twelveChordsInMode[index] || null);
  }

  const semitonesChordsInModeSorted = semitonesChordsInMode.map((chord, i) => {
    const index = (i * pitchSkip) % semitones;
    return semitonesChordsInMode[index];
  });

  return semitonesChordsInModeSorted;
}
