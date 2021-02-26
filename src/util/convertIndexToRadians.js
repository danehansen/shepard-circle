import { toRadianDirection } from './math';

export default function convertIndexToRadians(index, semitones, rootPitch, layoutIncrement) {
  const degreesInArc = 360 / semitones;
  const degrees = index * layoutIncrement / semitones * 360;
  const degreesOffset = degrees - (degreesInArc * rootPitch *  layoutIncrement)
  const radians = toRadianDirection(degreesOffset);
  return radians;
}
