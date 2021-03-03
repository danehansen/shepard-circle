import { modulo, round } from '@danehansen/math';
import convertIndexToRadians from './convertIndexToRadians';
import {toRadianDirection} from './math';

export default function convertRadiansToIndex(rad, semitones, rootPitch, pitchSkip) {
  const ROUND = 0.001;
  const CIRC = Math.PI * 2;
  const RADIANS_IN_SLICE = CIRC / semitones;
  const DEGREES_IN_SLICE = 360 / semitones;

  for(let i = 0; i < semitones; i++) {
    const degrees = modulo(DEGREES_IN_SLICE * (i - rootPitch) * pitchSkip, 360);
    const radians = toRadianDirection(degrees);
    const lowerLimit  = radians - RADIANS_IN_SLICE / 2;
    const upperLimit = radians + RADIANS_IN_SLICE / 2;
    let adjustedRad = rad;

    if (lowerLimit <= adjustedRad && upperLimit >= adjustedRad) {
      return i;
    }

    if (lowerLimit < 0 && upperLimit > 0) {
      adjustedRad -= CIRC;
    } else if (lowerLimit < CIRC && upperLimit > CIRC) {
      adjustedRad += CIRC;
    }

    if (lowerLimit <= adjustedRad && upperLimit >= adjustedRad) {
      return i;
    }
  }
}
