import styles from './Display.module.scss';
import classnames from 'classnames';
import React from 'react';
import Canvas from './canvas';
import {modulo} from '@danehansen/math';
import convertIndexToRadians from '../../util/convertIndexToRadians';

export default class Display extends React.Component {
  state = {}

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
    const {activePitches, layoutIncrement, semitones, rootPitch, diameter} = this.props;

    const colors = findColors(semitones);
    for (let i = 0; i < rootPitch; i++) {
      colors.unshift(colors.pop());
    }

    for (let i = 0; i < semitones; i++) {
      const pitch = i;
      const radians = convertIndexToRadians(pitch, semitones, rootPitch, layoutIncrement);
      const color = colors[i];
      const isActive = activePitches.indexOf(pitch) >= 0;
      fillSlice(this._buffer, color, pitch, semitones, rootPitch, layoutIncrement, diameter, isActive ? 1 : 0.95, isActive ? 0.12 : 0.1);
    }
  }

  _connectPitches() {
    const {activePitches, semitones, rootPitch, layoutIncrement, diameter} = this.props;
    for (let i = 0; i < activePitches.length; i++) {
      const pitchA = activePitches[i];
      for (let j = i; j < activePitches.length; j++) {
        const pitchB = activePitches[j];
        connectPitches(pitchA, pitchB, semitones, rootPitch, layoutIncrement, diameter, this._buffer, 0.4);
      }
    }
  }
}

function fillSlice(canvas, color, pitch, semitones, rootPitch, layoutIncrement, diameter, outerRadius, holeRadius) {
  const center = diameter / 2;
  const halfSlice = Math.PI / semitones;
  let radians = convertIndexToRadians(pitch, semitones, rootPitch, layoutIncrement);

  // this is the edge of slice on the clockwise side
  // canvas.moveTo(center, center);
  let cos = Math.cos(radians - halfSlice);
  let sin = Math.sin(radians - halfSlice);
  canvas.beginPath();
  canvas.fillStyle = color;
  canvas.moveTo(center + cos * center * holeRadius, center + sin * -center * holeRadius);
  canvas.lineTo(center + cos * center * outerRadius, center + sin * -center * outerRadius);

  // outer arc
  cos = Math.cos(radians);
  sin = Math.sin(radians);
  const newAngle = Math.atan2(-sin, cos)
  let startAngle = newAngle + halfSlice;
  let endAngle = newAngle - halfSlice;
  canvas.arc(center, center, center * outerRadius, startAngle, endAngle, true);

  // this is the edge of slice on the anticlockwise side
  cos = Math.cos(radians + halfSlice);
  sin = Math.sin(radians + halfSlice);
  canvas.moveTo(center + cos * center * outerRadius, center + sin * -center * outerRadius);
  canvas.lineTo(center + cos * center * holeRadius, center + sin * -center * holeRadius);

  // inner arc
  cos = Math.cos(radians);
  sin = Math.sin(radians);
  startAngle = newAngle - halfSlice;
  endAngle = newAngle + halfSlice;
  canvas.arc(center, center, center * holeRadius, startAngle, endAngle, false);

  canvas.fill();
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

  return `rgb(${r}, ${g}, ${b})`;
}

function connectPitches(pitchA, pitchB, semitones, rootPitch, layoutIncrement, diameter, canvas, radius) {
  const center = diameter / 2;

  const radianA = convertIndexToRadians(pitchA, semitones, rootPitch, layoutIncrement);
  const cosA = Math.cos(radianA);
  const sinA = Math.sin(-radianA);

  const radianB = convertIndexToRadians(pitchB, semitones, rootPitch, layoutIncrement);
  const cosB = Math.cos(radianB);
  const sinB = Math.sin(-radianB);

  canvas.beginPath();
  canvas.moveTo(center + cosA * center * radius, center + sinA * center * radius)
  canvas.lineTo(center + cosB * center * radius, center + sinB * center * radius);
  canvas.stroke();
}
