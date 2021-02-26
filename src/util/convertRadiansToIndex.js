import { modulo, round } from '@danehansen/math';
import convertIndexToRadians from './convertIndexToRadians';
import {toRadianDirection} from './math';

export default function convertRadiansToIndex(rad, semitones, rootPitch, layoutIncrement) {
  const ROUND = 0.001;
  const CIRC = Math.PI * 2;

  // const radB = round(rad, CIRC / semitones);
  // const radC = round(modulo(radB, CIRC), ROUND);
  // for(let i = 0; i < semitones; i++) {
  //   const r = round(convertIndexToRadians(i, semitones, rootPitch, layoutIncrement), ROUND);
  //   if (r === radC) {
  //     return i;
  //   }
  // }

  const RADIANS_IN_SLICE = CIRC / semitones;
  const DEGREES_IN_SLICE = 360 / semitones;

  let closestPitch = null;
  let closestDifference = Number.MAX_VALUE;

  for(let i = 0; i < semitones; i++) {
    const degrees = modulo(DEGREES_IN_SLICE * (i - rootPitch) * layoutIncrement, 360);
    const radians = toRadianDirection(degrees);
    const lowerLimit  = radians - RADIANS_IN_SLICE / 2;
    const upperLimit = radians + RADIANS_IN_SLICE / 2;
    let adjustedRad = rad;
    if (adjustedRad < RADIANS_IN_SLICE / 2 && upperLimit > CIRC) {
      adjustedRad += CIRC;
    }
    // console.log(i, 'convertRadiansToIndex', round(degrees, ROUND), round(radians, ROUND));
    // console.log(round(lowerLimit, ROUND), round(rad, ROUND), round(upperLimit, ROUND));
    if (lowerLimit <= adjustedRad && upperLimit >= adjustedRad) {
      return i;
    }

    // const difference = Math.abs(radians - rad);
    // if (difference < closestDifference) {
    //   closestDifference = difference;
    //   closestPitch = i;
    // }
  }

  // return (closestPitch * layoutIncrement * rootPitch) % semitones;
}
