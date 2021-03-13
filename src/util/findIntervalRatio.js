import {findInterval, CENTS_PER_OCTAVE} from './music';

export default function findIntervalRatio(fRoot, fComparison) {
  const tolerance = 2;
  const cents = findInterval(fRoot, fComparison) % CENTS_PER_OCTAVE;

  if (Math.abs(cents - 100) < tolerance || Math.abs(cents + 1100) < tolerance) {
    return [16, 15];
  }
  if (Math.abs(cents - 1100) < tolerance || Math.abs(cents + 100) < tolerance) {
    return [15, 16];
  }

  if (Math.abs(cents - 200) < tolerance || Math.abs(cents + 1000) < tolerance) {
    return [9, 8];
  }
  if (Math.abs(cents - 1000) < tolerance || Math.abs(cents + 200) < tolerance) {
    return [8, 9];
  }

  if (Math.abs(cents - 300) < tolerance || Math.abs(cents + 900) < tolerance) {
    return [5, 3];
  }
  if (Math.abs(cents - 900) < tolerance || Math.abs(cents + 300) < tolerance) {
    return [3, 5];
  }

  if (Math.abs(cents - 400) < tolerance || Math.abs(cents + 800) < tolerance) {
    return [5, 4];
  }
  if (Math.abs(cents - 800) < tolerance || Math.abs(cents + 400) < tolerance) {
    return [4, 5];
  }

  if (Math.abs(cents - 500) < tolerance || Math.abs(cents + 700) < tolerance) {
    return [3, 2];
  }
  if (Math.abs(cents - 700) < tolerance || Math.abs(cents + 500) < tolerance) {
    return [2, 3];
  }

  if (Math.abs(cents - 600) < tolerance || Math.abs(cents + 600) < tolerance) {
    return [13, 9];
  }

  if (Math.abs(cents - 1200) < tolerance || Math.abs(cents + 1200) < tolerance || Math.abs(cents) < tolerance) {
    return [1, 1];
  }
}
