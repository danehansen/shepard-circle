export default function(pitchNames, pitchSkip) {
  const sorted = pitchNames.map(function(pitchName, index) {
    return pitchNames[(index * pitchSkip) % pitchNames.length];
  })
  return sorted;
}
