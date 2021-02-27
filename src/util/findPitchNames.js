export default function(semitones) {
  switch(semitones) {
    case 1:
      return ['C'];
    case 2:
      return ['C', 'F#/Gb'];
    case 3:
      return ['C', 'E', 'G#/Ab'];
    case 4:
      return ['C', 'D#/Eb', 'F#/Gb', 'A'];
    case 6:
      return ['A#/Bb', 'C', 'D', 'E', 'F#/Gb','G#/Ab'];
    case 12:
      return ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    default:
      if (semitones <= 26) {
        return [...Array(semitones).keys()].map(function(key){return String.fromCharCode(97 + parseInt(key)).toUpperCase()});

      }
      const keys = [...Array(semitones + 1).keys()];
      keys.shift();
      return keys;
  }
}
