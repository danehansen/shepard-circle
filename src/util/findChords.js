import {modulo, sortAscending} from '@danehansen/math';
import {STANDARD_SEMITONES} from './music';

const CHORDS = [
  {
    name: 'major',
    suffix: '',
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700],
  },
  {
    name: 'minor',
    suffix: '',
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700],
  },
  {
    name: 'power chord',
    suffix: <sup>5</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [700],
  },
  {
    name: 'major sixth',
    suffix: <sup>6</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 900],
  },
  {
    name: 'minor sixth',
    suffix: <sup>6</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 900],
  },
  {
    name: 'dominant seventh',
    suffix: <sup>7</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 1000],
  },
  {
    name: 'major seventh',
    suffix: <sup>∆7</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 1100],
  },
  {
    name: 'minor seventh',
    suffix: <sup>7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 1000],
  },
  {
    name: 'augmented',
    suffix: '+',
    textTransform: 'toUpperCase',
    additionalPitches: [400, 800],
  },
  {
    name: 'diminished',
    suffix: 'º',
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600],
  },
  {
    name: 'augmented seventh',
    suffix: <>+<sup>∆7</sup></>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 800, 1000],
  },
  {
    name: 'minor-major seventh',
    suffix: <sup>M7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 1100],
  },
  {
    name: 'diminished seventh',
    suffix: <>º<sup>7</sup></>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600, 900],
  },
  {
    name: 'half-diminished seventh',
    suffix: <sup>ø7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600, 1000],
  },
];

export default function findChords(pitches, semitones, pitchNames) {
  function convertPitchToCents(pitch) {
    return pitch / semitones * STANDARD_SEMITONES * 100;
  }

  function convertCentsToPitch(cents) {
    return cents / 100 / STANDARD_SEMITONES * semitones;
  }

  const pitchesSorted = pitches.sort(sortAscending);
  const pitchesSortedScaled = pitchesSorted.map(convertPitchToCents)
  const inversions = findInversionsOfChord(pitchesSortedScaled)

  const matchingChords = [];
  inversions.forEach(inversion => {
    const inversionLowered = inversion.map((pitch) => {
      return modulo(pitch - inversion[0], 1200);
    })
    const rootPitch = convertCentsToPitch(inversion[0]);
    const additionalPitches = inversionLowered.slice(1);
    CHORDS.forEach(chord => {
      const fingersNeeded = findFingersNeeded(additionalPitches, chord);
      if (typeof fingersNeeded === 'number') {
        matchingChords.push({
          name: <>{pitchNames[rootPitch][chord.textTransform]()}{chord.suffix}</>,
          fingersNeeded,
        })
      }
    })
  });
  matchingChords.sort(sortMatchingChords);
  return matchingChords;
  // return {
  //   pitchesSorted,
  //   pitchesSortedScaled,
  //   inversions,
  //   matchingChords,
  // }
}

function findInversionsOfChord(pitches) {
  const results = [];
  for (let i = 0; i < pitches.length; i++) {
    results.push(pitches.map((pitch, j) => pitches[(j + i) % pitches.length]))
  }
  return results;
}

function sortMatchingChords(chordA, chordB) {
  return chordA.fingersNeeded - chordB.fingersNeeded;
}

function findFingersNeeded(additionalPitches, chord) {
  let correctPitches = 0;
  for (let i = 0; i < additionalPitches.length; i++) {
    if (chord.additionalPitches.indexOf(additionalPitches[i]) < 0) {
      return;
    }
    correctPitches++;
  }
  return chord.additionalPitches.length - correctPitches;
}
