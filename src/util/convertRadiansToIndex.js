import { modulo, round } from '@danehansen/math';
import convertIndexToRadians from './convertIndexToRadians';

export default function convertRadiansToIndex(rad, semitones, rootPitch, layoutIncrement) {
  const ROUND = 0.001;
  const CIRC = Math.PI * 2;
  const radB = round(rad, CIRC / semitones);
  const radC = round(modulo(radB, CIRC), ROUND);
  for(let i = 0; i < semitones; i++) {
    const r = round(convertIndexToRadians(i, semitones, rootPitch, layoutIncrement), ROUND);
    if (r === radC) {
      return i;
    }
  }
}
