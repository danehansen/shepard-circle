import {modulo} from '@danehansen/math';
import {STANDARD_SEMITONES} from './music';
import {CHORD_TYPES} from './constants';

export default function findChords(pitches, semitones, pitchNames, chordTypes = CHORD_TYPES) {
  const matchingChords = [];
  const kLimit = pitches.length;
  if (!kLimit) {
    return matchingChords;
  }
  const cents = pitches.map(convertPitchToCents)
  const inversions = findInversionsOfChord(cents);
  const iLimit = 12;
  const jLimit = chordTypes.length;

  for (let i = 0; i < iLimit; i++) {
    const transposition = i * 100;

    for (let j = 0; j < jLimit; j++) {
      const chord = chordTypes[j];

      for (let k = 0; k <= kLimit; k++) {
        let rootCent;
        let additionalCents;
        let inversion;

        if (k === kLimit) {
          inversion = inversions[0];
          rootCent = transposition;
          additionalCents = inversion.map(cent => modulo(cent - rootCent, 1200));
        } else {
          inversion = inversions[k];
          rootCent = inversion[0];
          additionalCents = inversion.slice(1).map(cent => modulo(cent - rootCent, 1200));
        }

        if (transposition === rootCent) {
          let fingersNeeded = findFingersNeeded(additionalCents, chord);

          if (typeof fingersNeeded === 'number') {
            const rootPitch = convertCentsToPitch(rootCent);
            const obj = {
              fingersNeeded: k === kLimit ? fingersNeeded + 1 : fingersNeeded,
              name: `${pitchNames[rootPitch][chord.textTransform]()}${chord.suffix}`,
              rootPitch,
              chordIndex: j,
            }
            matchingChords.push(obj);
          }
        }
      }
    }

  }
  matchingChords.sort(sortOnName).sort(sortOnChordsIndex).sort(sortOnFingersNeeded);

  return matchingChords;

  function convertPitchToCents(pitch) {
    return pitch / semitones * STANDARD_SEMITONES * 100;
  }

  function convertCentsToPitch(cents) {
    return cents / 100 / STANDARD_SEMITONES * semitones;
  }
}

function findInversionsOfChord(pitches) {
  const results = [];
  for (let i = 0; i < pitches.length; i++) {
    results.push(pitches.map((pitch, j) => pitches[(j + i) % pitches.length]))
  }
  return results;
}

function sortOnFingersNeeded(chordA, chordB) {
  return chordA.fingersNeeded - chordB.fingersNeeded;
}

function sortOnChordsIndex(chordA, chordB) {
  return chordA.chordIndex - chordB.chordIndex;
}

function sortOnName(chordA, chordB) {
  if (chordA.name > chordB.name) {
    return 1;
  } else if (chordA.name < chordB.name) {
    return -1;
  }
  return 0;
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
