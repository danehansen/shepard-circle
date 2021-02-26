import {modulo} from '@danehansen/math';

export function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

export function toDegrees(radians) {
  return radians * 180 / Math.PI;
}

export function toRadianDirection(degrees) {
  const radians = toRadians(-degrees);
  const circ = Math.PI * 2;
  const offset = radians + Math.PI * 0.5;
  return modulo(offset, circ);
}

export function toDegreeDirection(radians) {
  const degrees = toDegrees(-radians);
  return modulo(degrees + 90, 360);
}
