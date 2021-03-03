export default function(frequency, transposition, semitones) {
  return frequency * Math.pow(Math.pow(2, 1 / semitones), transposition);
}
