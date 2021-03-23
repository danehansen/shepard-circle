import {modulo} from '@danehansen/math';
import {RADIANS_IN_CIRCLE} from 'util/constants';

function flipRadiansVertically(radians) {
  return Math.atan2(-Math.sin(radians), Math.cos(radians));
}

export default function fillSlice(canvas, color, diameter, startRadians, endRadians, outerRadius, holeRadius, isInKey) {
  const center = diameter / 2;
  const isCircle = modulo(startRadians, RADIANS_IN_CIRCLE) === modulo(endRadians, RADIANS_IN_CIRCLE);

  canvas.beginPath();
  canvas.fillStyle = typeof color === 'object' ? `rgb(${color.r}, ${color.g}, ${color.b})` : color;

  if (isCircle) {
    canvas.arc(center, center, center * outerRadius, 0, RADIANS_IN_CIRCLE);
  } else {
    // clockwise straight edge
    let cos = Math.cos(startRadians);
    let sin = Math.sin(startRadians);
    canvas.moveTo(center + cos * center * holeRadius, center + sin * -center * holeRadius);
    canvas.lineTo(center + cos * center * outerRadius, center + sin * -center * outerRadius);

    // outer arc
    canvas.arc(center, center, center * outerRadius, flipRadiansVertically(startRadians), flipRadiansVertically(endRadians), true);

    // anticlockwise straight edge
    cos = Math.cos(endRadians);
    sin = Math.sin(endRadians);
    canvas.moveTo(center + cos * center * outerRadius, center + sin * -center * outerRadius);
    canvas.lineTo(center + cos * center * holeRadius, center + sin * -center * holeRadius);

    // inner arc
    canvas.arc(center, center, center * holeRadius, flipRadiansVertically(endRadians), flipRadiansVertically(startRadians), false);
  }

  canvas.fill();

  if (isCircle) {
    canvas.beginPath();
    canvas.globalCompositeOperation = 'destination-out';
    canvas.arc(center, center, center * holeRadius, 0, RADIANS_IN_CIRCLE);
    canvas.fill();
    canvas.globalCompositeOperation = 'source-over';
  }
}
