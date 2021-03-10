import {modulo} from '@danehansen/math';

export function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

export function toDegrees(radians) {
  return radians * 180 / Math.PI;
}

export function toRadianDirection(degrees) {
  const circ = Math.PI * 2;
  const radians = toRadians(-degrees);
  const offset = radians + circ * 0.25;
  return modulo(offset, circ);
}

export function toDegreeDirection(radians) {
  const degrees = toDegrees(-radians);
  return modulo(degrees + 90, 360);
}
