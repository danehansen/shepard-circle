const CHORDS = [
  {
    name: 'major',
    suffix: 'Δ',
    additionalPitches: [4, 7],
  },
  {
    name: 'minor',
    suffix: '−',
    additionalPitches: [3, 7],
  },
  {
    name: 'augmented',
    suffix: '+',
    additionalPitches: [4, 8],
  },
  {
    name: 'diminished',
    suffix: 'o',
    additionalPitches: [3, 6],
  },
];

export default function findChords(pitches) {
  const matchingChords = [];

  const pitchSpelling = [...pitches];
  for (let i = 0; i < pitches.length; i++) {
    for(const chord of CHORDS) {
      const matchAmount = comparePitchSpellingWithChord(pitchSpelling, chord);
      if (matchAmount) {
        matchingChords.push({...chord, prefix: pitchSpelling[0], matchAmount});
      }
    }
    pitchSpelling.push(pitchSpelling.shift());
  }

  matchingChords.sort(sortMatchingChords);

  return matchingChords;
}


function sortMatchingChords(chordA, chordB) {
  return chordA.matchAmount - chordB.matchAmount;
}

function comparePitchSpellingWithChord(pitchSpelling, chord) {
  const totalPossibleMatches = Math.max(pitchSpelling.length - 1, chord.additionalPitches.length);
  const firstPitch = pitchSpelling[0];
  let matches = 0;
  for (let i = 1; i < pitchSpelling.length; i++) {
    const currentPitch = pitchSpelling[i] - firstPitch;
    if (chord.additionalPitches.indexOf(currentPitch) >= 0) {
      matches++;
    } else {
      return 0;
    }
  }
  return matches / totalPossibleMatches;
}
