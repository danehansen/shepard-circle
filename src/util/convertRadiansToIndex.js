import { modulo, toRadianDirection } from '@danehansen/math';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from 'util/constants';

export default function convertRadiansToIndex(rad, semitones, rootPitch, pitchSkip) {
  const RADIANS_IN_SLICE = RADIANS_IN_CIRCLE / semitones;
  const DEGREES_IN_SLICE = DEGREES_IN_CIRCLE / semitones;

  for(let i = 0; i < semitones; i++) {
    const degrees = modulo(DEGREES_IN_SLICE * (i - rootPitch) * pitchSkip, DEGREES_IN_CIRCLE);
    const radians = toRadianDirection(degrees);
    const lowerLimit  = radians - RADIANS_IN_SLICE / 2;
    const upperLimit = radians + RADIANS_IN_SLICE / 2;
    let adjustedRad = rad;

    if (lowerLimit <= adjustedRad && upperLimit >= adjustedRad) {
      return i;
    }

    if (lowerLimit < 0 && upperLimit > 0) {
      adjustedRad -= RADIANS_IN_CIRCLE;
    } else if (lowerLimit < RADIANS_IN_CIRCLE && upperLimit > RADIANS_IN_CIRCLE) {
      adjustedRad += RADIANS_IN_CIRCLE;
    }

    if (lowerLimit <= adjustedRad && upperLimit >= adjustedRad) {
      return i;
    }
  }
}
