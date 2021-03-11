import {modulo, sortAscending} from '@danehansen/math';
import {STANDARD_SEMITONES} from './music';

const CHORDS = [
  {
    name: 'power chord',
    suffix: '5',
    textTransform: 'toUpperCase',
    // TODO change these to cents
    additionalPitches: [7],
  },
  {
    name: 'major',
    suffix: '',
    textTransform: 'toUpperCase',
    additionalPitches: [4, 7],
  },
  {
    name: 'minor',
    suffix: '',
    textTransform: 'toLowerCase',
    additionalPitches: [3, 7],
  },
  {
    name: 'augmented',
    suffix: '+',
    textTransform: 'toUpperCase',
    additionalPitches: [4, 8],
  },
  {
    name: 'diminished',
    suffix: 'º',
    textTransform: 'toLowerCase',
    additionalPitches: [3, 6],
  },
];

export default function findChords(pitches, semitones, pitchNames) {
  const pitchesSorted = pitches.sort(sortAscending)
  const pitchesSortedScaled = pitchesSorted.map((pitch) => {
    return pitch / semitones * STANDARD_SEMITONES;
  })
  const matchingChords = [];

  for (let i = 0; i < pitches.length; i++) {
    const rootPitch = pitchesSortedScaled.shift();
    const additionalPitches = [...pitchesSortedScaled].map(pitch => modulo(pitch - rootPitch, STANDARD_SEMITONES));

    for(const chord of CHORDS) {
      const matchAmount = comparePitchSpellingWithChord(additionalPitches, chord);
      if (matchAmount) {
        const match = {
          name: `${pitchNames[i]}${chord.suffix}`[chord.textTransform](),
          matchAmount,
        };
        matchingChords.push(match);
      }
    }

    pitchesSortedScaled.push(rootPitch);
  }

  matchingChords.sort(sortMatchingChords);
  console.log('findChords', matchingChords);

  return matchingChords;
}

function sortMatchingChords(chordA, chordB) {
  return chordA.matchAmount - chordB.matchAmount;
}

function comparePitchSpellingWithChord(additionalPitches, chord) {
  const potentialMatches = Math.max(additionalPitches.length, chord.additionalPitches.length);

  let howManyFingersNeededToCompleteChord;

  // let matches = 0;
  // for (let i = 0; i < additionalPitches.length; i++) {
  //   if (chord.additionalPitches.indexOf(additionalPitches[i]) >= 0) {
  //     matches++;
  //   }
  // }
  // return {matches, potentialMatches};
}
