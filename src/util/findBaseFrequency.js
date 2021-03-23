import {HUMAN_MIN_FREQ} from './music';

export default function findBaseFrequency(frequency) {
  while(frequency / 2 > HUMAN_MIN_FREQ) {
    frequency /= 2;
  }
  return frequency;
}
