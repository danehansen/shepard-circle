import {SEMITONES} from '../util/music';

export default function(frequency, transposition, semitones = SEMITONES) {
  return frequency * Math.pow(Math.pow(2, 1 / semitones), transposition);
}
