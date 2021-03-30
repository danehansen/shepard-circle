import {toRadianDirection} from '@danehansen/math';
import {RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from 'util/constants';

export function findDirectionalColor(radians) {
  radians -= RADIANS_IN_CIRCLE * 0.25;
  const colorSlice = RADIANS_IN_CIRCLE / 3;
  const cosR = Math.cos(-radians);
  const cosG = Math.cos(-radians - colorSlice);
  const cosB = Math.cos(-radians + colorSlice);

  const r = Math.round(cosR * 255 * 0.5 + 255 * 0.5);
  const g = Math.round(cosG * 255 * 0.5 + 255 * 0.5);
  const b = Math.round(cosB * 255 * 0.5 + 255 * 0.5);

  return {r, g, b};
}

export default function findColors(semitones) {
  const colors = [];
  const buttonSlice = DEGREES_IN_CIRCLE / semitones;
  for(let i = 0; i < semitones; i++) {
    colors.push(findDirectionalColor(toRadianDirection(i * buttonSlice)));
  }
  return colors;
}

// export default function findColors(semitones) {
//   const colors = [];
//   const buttonSlice = DEGREES_IN_CIRCLE / semitones;
//   for(let i = 0; i < semitones; i++) {
//     colors.push(`hsl(${buttonSlice * i}, 100%, 55%)`);
//   }
//   return colors;
// }
