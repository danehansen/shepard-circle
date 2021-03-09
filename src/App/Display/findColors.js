import {toRadianDirection} from '../../util/math';

function findDirectionalColor(direction) {
  direction -= Math.PI * 0.5;
  const colorSlice = Math.PI * 2 / 3;
  const cosR = Math.cos(-direction);
  const cosG = Math.cos(-direction - colorSlice);
  const cosB = Math.cos(-direction + colorSlice);

  const r = Math.round(cosR * 255 * 0.5 + 255 * 0.5);
  const g = Math.round(cosG * 255 * 0.5 + 255 * 0.5);
  const b = Math.round(cosB * 255 * 0.5 + 255 * 0.5);

  return {r, g, b};
}

export default function findColors(semitones) {
  const colors = [];
  const buttonSlice = 360 / semitones;
  for(let i = 0; i < semitones; i++) {
    colors.push(findDirectionalColor(toRadianDirection(i * buttonSlice)));
  }
  return colors;
}
