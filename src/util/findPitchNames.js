export default function(semitones) {
  if (semitones === 12) {
    return ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
  } else if (semitones <= 26) {
    return [...Array(semitones).keys()].map(function(key){return String.fromCharCode(97 + parseInt(key)).toUpperCase()});
  } else {
    const keys = [...Array(semitones + 1).keys()];
    keys.shift();
    return keys;
  }
}
