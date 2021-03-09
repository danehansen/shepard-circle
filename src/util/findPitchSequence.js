export default function findPitchSequence(semitones, pitchSkip) {
  const sequence = []
  for (let i = 0; i < semitones; i++) {
    sequence.push((i * pitchSkip) % semitones);
  }
  return sequence;
}
