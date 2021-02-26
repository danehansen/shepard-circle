import { toRadianDirection } from './math';

export default function convertIndexToRadians(index, semitones, rootPitch, layoutIncrement) {
  const degreesInSlice = 360 / semitones;
  const degrees = index * layoutIncrement / semitones * 360;
  const degreesOffset = degrees - (degreesInSlice * rootPitch *  layoutIncrement)
  const radians = toRadianDirection(degreesOffset);
  return radians;
}
