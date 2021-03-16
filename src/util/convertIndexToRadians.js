import { toRadianDirection } from '@danehansen/math';
import { DEGREES_IN_CIRCLE } from './constants';

export default function convertIndexToRadians(index, semitones, rootPitch, pitchSkip) {
  const degreesInSlice = DEGREES_IN_CIRCLE / semitones;
  const degrees = index * pitchSkip / semitones * DEGREES_IN_CIRCLE;
  const degreesOffset = degrees - (degreesInSlice * rootPitch *  pitchSkip)
  const radians = toRadianDirection(degreesOffset);
  return radians;
}
