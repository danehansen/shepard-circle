import {SEMITONES} from './music';

export default function findCents(root, comparison) {
  return SEMITONES * 100 * Math.log(2) * comparison / root;
}
