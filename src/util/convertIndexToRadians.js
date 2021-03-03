import { toRadianDirection } from './math';

export default function convertIndexToRadians(index, semitones, rootPitch, pitchSkip) {
  const degreesInSlice = 360 / semitones;
  const degrees = index * pitchSkip / semitones * 360;
  const degreesOffset = degrees - (degreesInSlice * rootPitch *  pitchSkip)
  const radians = toRadianDirection(degreesOffset);
  return radians;
}
