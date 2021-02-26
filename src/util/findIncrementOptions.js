export default function(semitones) {
  const increments = [];
  for(let i = 1; i < semitones; i++) {
    if (findIncrementsOfSemitone(semitones, i)) {
      increments.push(i);
    }
  }
  return increments;
}

function findIncrementsOfSemitone(semitones, increment) {
  const allSemitones = [...Array(semitones).keys()];
  const semitoneIndexes = [];
  for(let i = 0; i < semitones; i++) {
    const semitoneIndex = (i * increment) % semitones;
    if (semitoneIndexes[semitoneIndex] !== undefined) {
      return false;
    } else {
      semitoneIndexes[semitoneIndex] = semitoneIndex;
    }
  }
  return semitoneIndexes;
}
