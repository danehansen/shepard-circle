import styles from './Display.module.scss';
import classnames from 'classnames';
import React from 'react';
import Canvas from './canvas';
import {toRadianDirection} from '../../util/math';
import {modulo} from '@danehansen/math';
import findInterval from '../../util/findInterval';
import PropTypes from 'prop-types';
import {MODES} from '../../constants';

function flipRadiansVertically(radians) {
  return Math.atan2(-Math.sin(radians), Math.cos(radians));
}

export default class Display extends React.Component {
  static propTypes = {
    activePitches: PropTypes.arrayOf(PropTypes.number).isRequired,
    baseFrequencies: PropTypes.arrayOf(PropTypes.number).isRequired,
    diameter: PropTypes.number.isRequired,
    mode: PropTypes.number.isRequired,
    pitchSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  constructor(props) {
    super(props);
    this._rootNode = React.createRef();
  }

  componentDidMount() {
    const {current} = this._rootNode;
    const {diameter} = this.props;
    this._root = new Canvas(current);
    this._root.globalCompositeOperation = 'copy';
    this._buffer = new Canvas(undefined, diameter, diameter);

    this._drawSlices();
    this._root.drawImage(this._buffer);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._root.clearRect();
      this._buffer.clearRect();
      this._drawSlices();
      this._connectPitches();
      this._root.drawImage(this._buffer);
    }
  }

  render() {
    const {className} = this.props;
    return <canvas className={classnames(styles.root, className)} ref={this._rootNode} />;
  }

  _drawSlices() {
    const {activePitches, diameter, pitchSequence, mode} = this.props;
    const semitones = pitchSequence.length;
    const halfSlice = Math.PI / semitones;
    const colors = findColors(semitones);
    const {chords} = MODES[mode];

    for (let i = 0; i < semitones; i++) {
      const pitch = pitchSequence[i];
      const degrees = pitch / semitones * 360;
      const color = colors[i];
      const isActive = activePitches.indexOf(pitchSequence.indexOf(i)) >= 0;
      const radians = toRadianDirection(degrees);
      const isInKey = !!chords[i];

      fillSlice(this._buffer, color, diameter, radians - halfSlice, radians + halfSlice, isActive ? 1 : 0.95, isActive ? 0.12 : 0.1, isInKey);
    }
  }

  _connectPitches() {
    const {activePitches, baseFrequencies, diameter, pitchSequence} = this.props;
    const colors = findColors(pitchSequence.length);
    for (let i = 0; i < activePitches.length; i++) {
      const pitchA = activePitches[i];
      const degreesA = 360 / pitchSequence.length * pitchSequence.indexOf(pitchA);
      const frequencyA = baseFrequencies[pitchSequence.indexOf(pitchA)];
      for (let j = i + 1; j < activePitches.length; j++) {
        const pitchB = activePitches[j];
        const degreesB = 360 / pitchSequence.length * pitchSequence.indexOf(pitchB);
        const frequencyB = baseFrequencies[pitchSequence.indexOf(pitchB)];
        connectPitches(toRadianDirection(degreesA), toRadianDirection(degreesB), diameter, this._buffer, 0.4, frequencyA, frequencyB, colors[i], colors[j]);
      }
    }
  }
}

function fillSlice(canvas, color, diameter, startRadians, endRadians, outerRadius, holeRadius, isInKey) {
  const center = diameter / 2;
  const isCircle = modulo(startRadians, Math.PI * 2) === modulo(endRadians, Math.PI * 2);

  canvas.beginPath();
  canvas.fillStyle =`rgb(${color.r}, ${color.b}, ${color.g})`;

  if (isCircle) {
    canvas.arc(center, center, center * outerRadius, 0, 2 * Math.PI);
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
    canvas.arc(center, center, center * holeRadius, 0, 2 * Math.PI);
    canvas.fill();
    canvas.globalCompositeOperation = 'source-over';
  }
}

function findColors(semitones) {
  const colors = [];
  const buttonSlice = Math.PI * 2 / semitones;
  for(let i = 0; i < semitones; i++) {
    colors.push(directionalColor(i * buttonSlice));
  }
  return colors;
}

function directionalColor(direction) {
  const colorSlice = Math.PI * 2 / 3;
  const cosR = Math.cos(direction);
  const sinR = Math.sin(direction);
  const cosG = Math.cos(direction - colorSlice);
  const sinG = Math.sin(direction - colorSlice);
  const cosB = Math.cos(direction + colorSlice);
  const sinB = Math.sin(direction + colorSlice);

  const r = Math.round(cosR * 255 * 0.5 + 255 * 0.5);
  const g = Math.round(cosG * 255 * 0.5 + 255 * 0.5);
  const b = Math.round(cosB * 255 * 0.5 + 255 * 0.5);

  return {r, g, b};
}

function connectPitches(radianA, radianB, diameter, canvas, radius, frequencyA, frequencyB, colorA, colorB) {
  const center = diameter / 2;

  const cosA = Math.cos(radianA);
  const sinA = Math.sin(-radianA);

  const cosB = Math.cos(radianB);
  const sinB = Math.sin(-radianB);

  const pointA = {
    x: center + cosA * center * radius,
    y: center + sinA * center * radius,
  };

  const pointB = {
    x: center + cosB * center * radius,
    y: center + sinB * center * radius,
  };

  const interval = findInterval(frequencyA, frequencyB);
  if (interval) {
    canvas.lineWidth = 1;
    canvas.globalCompositeOperation = "lighten";

    // canvas.globalCompositeOperation = "lighter";
    // canvas.globalCompositeOperation = "multiply";
    // canvas.globalCompositeOperation = "screen";
    // canvas.globalCompositeOperation = "overlay";
    // canvas.globalCompositeOperation = "darken";

    // canvas.globalCompositeOperation = "color-dodge";
    // canvas.globalCompositeOperation = "color-burn";
    // canvas.globalCompositeOperation = "hard-light";
    // canvas.globalCompositeOperation = "soft-light";
    // canvas.globalCompositeOperation = "difference";
    // canvas.globalCompositeOperation = "exclusion";
    // canvas.globalCompositeOperation = "hue";
    // canvas.globalCompositeOperation = "saturation";
    // canvas.globalCompositeOperation = "color";
    // canvas.globalCompositeOperation = "luminosity";
    const xDiff = pointB.x - pointA.x;
    const yDiff = pointB.y - pointA.y;
    const diff = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    const radiusA = diff / interval[0] / 2;
    const radiusB = diff / interval[1] / 2;

    canvas.strokeStyle = `rgb(${colorA.r}, ${colorA.g}, ${colorA.b})`;
    for (let i = 0; i < interval[0]; i++) {
      canvas.beginPath();
      const centerX = pointA.x + xDiff / interval[0] * (i + 0.5);
      const centerY = pointA.y + yDiff / interval[0] * (i + 0.5);
      canvas.arc(centerX, centerY, radiusA, 0, Math.PI * 2);
      canvas.stroke();
    }

    canvas.strokeStyle = `rgb(${colorB.r}, ${colorB.g}, ${colorB.b})`;
    for (let i = 0; i < interval[1]; i++) {
      canvas.beginPath();
      const centerX = pointA.x + xDiff / interval[1] * (i + 0.5);
      const centerY = pointA.y + yDiff / interval[1] * (i + 0.5);
      canvas.arc(centerX, centerY, radiusB, 0, Math.PI * 2);
      canvas.stroke();
    }
  }

  canvas.globalCompositeOperation = "source-over";
  canvas.strokeStyle = "white";
  canvas.lineWidth = 2;
  canvas.beginPath();
  canvas.moveTo(pointA.x, pointA.y);
  canvas.lineTo(pointB.x, pointB.y);
  canvas.stroke();
}
