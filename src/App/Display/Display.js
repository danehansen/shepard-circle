import styles from './Display.module.scss';
import classnames from 'classnames';
import React from 'react';
import Canvas from './canvas';

const colors = ['#f00', '#f80', '#ff0', '#8f0', '#0f0', '#0f8', '#0ff', '#08f', '#00f', '#80f', '#f0f', '#f08'];

export default class Display extends React.Component {
  state={}

  constructor(props) {
    super(props);
    this._rootNode = React.createRef();
  }

  componentDidMount() {
    const {current} = this._rootNode;
    const {offsetWidth, offsetHeight} = current;
    this._root = new Canvas(current);
    this._root.globalCompositeOperation = 'copy';
    this._buffer = new Canvas(undefined, offsetWidth, offsetHeight);
    this._background = new Canvas(undefined, offsetWidth, offsetHeight);


    this._drawBackground();
    this._root.drawImage(this._background);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeNotes !== this.props.activeNotes) {
      this._buffer.clearRect();
      this._buffer.drawImage(this._background);
      // this._buffer.globalCompositeOperation = 'hue';
      // this._buffer.globalCompositeOperation = 'multiply';
      // this._buffer.globalCompositeOperation = 'screen';
      // this._buffer.globalCompositeOperation = 'overlay';
      // this._buffer.globalCompositeOperation = 'darken';
      // this._buffer.globalCompositeOperation = 'lighten';
      // this._buffer.globalCompositeOperation = 'color-dodge';
      // this._buffer.globalCompositeOperation = 'color-burn';
      // this._buffer.globalCompositeOperation = 'luminosity';
      this._drawHitStates();
      this._connectNotes();
      // this._buffer.globalCompositeOperation = 'source-over';
      this._root.drawImage(this._buffer);
    }
  }

  componentWillUnmount() {

  }

  render() {
    const {className} = this.props;
    return <canvas className={classnames(styles.root, className)} ref={this._rootNode} />;
  }

  _drawBackground() {
    for (let i = 0; i < colors.length; i++) {
      fillSlice(this._background, colors[i], i);
    }
  }

  _drawHitStates() {
    for (const note of this.props.activeNotes) {
      fillSlice(this._buffer, `rgba(0,0,0,0.2)`, note);
    }
  }

  _connectNotes() {
    const {activeNotes} = this.props;
    const center = this._buffer.width / 2;
    const slice = Math.PI * 2 / 12;
    const canvas = this._buffer;
    for (let i = 0; i < activeNotes.length; i++) {
      const beginRad = slice * (activeNotes[i] + 9);
      const beginCos = Math.cos(beginRad);
      const beginSin = Math.sin(beginRad);
      for (let j = i; j < activeNotes.length; j++) {
        const endRad = slice * (activeNotes[j] + 9);
        const endCos = Math.cos(endRad);
        const endSin = Math.sin(endRad);
        canvas.beginPath();
        canvas.moveTo(center + beginCos * center, center + beginSin * center)
        canvas.lineTo(center + endCos * center, center + endSin * center);
        canvas.stroke();
      }
    }
  }
}

function fillSlice(canvas, color, index) {
  const center = canvas.width / 2;
  const slice = Math.PI * 2 / 12;

  canvas.beginPath();
  canvas.fillStyle = color;
  canvas.moveTo(center, center);

  const rad = slice * (index - 3.5);
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  canvas.lineTo(center + cos * center, center + sin * center);

  const closingRad = rad + slice;
  canvas.arc(center, center, center, rad, closingRad);
  canvas.fill();
}
