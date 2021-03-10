const CHORDS = [
  {
    name: 'major',
    suffix: '',
    textTransform: 'uppercase',
    additionalPitches: [4, 7],
  },
  {
    name: 'minor',
    suffix: '',
    textTransform: 'lowercase',
    additionalPitches: [3, 7],
  },
  {
    name: 'augmented',
    suffix: '+',
    textTransform: 'uppercase',
    additionalPitches: [4, 8],
  },
  {
    name: 'diminished',
    suffix: 'º',
    textTransform: 'lowercase',
    additionalPitches: [3, 6],
  },
];

export default function findChords(pitches, semitones, pitchNames) {
  console.log('findChords', {pitches, semitones});
  const matchingChords = [];
  const pitchSpelling = pitches.map(function(pitch){
    return pitch / semitones * 12;
  })
  console.log('findChords', {pitchSpelling});
  for (let i = 0; i < pitches.length; i++) {
    for(const chord of CHORDS) {
      const matchAmount = comparePitchSpellingWithChord(pitchSpelling, chord);
      if (matchAmount) {
        matchingChords.push({...chord, prefix: pitchNames[i], matchAmount});
      }
    }
    pitchSpelling.push(pitchSpelling.shift());
  }

  matchingChords.sort(sortMatchingChords);
  // console.log('findChords', matchingChords);

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
