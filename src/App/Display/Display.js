import styles from './Display.module.scss';
import classnames from 'classnames';
import React from 'react';
import Canvas from './canvas';
import {toRadianDirection} from '../../util/math';
import {MODES, RADIANS_IN_CIRCLE} from '../../util/constants';
import {useState, useEffect, useRef} from 'react';
import findColors from './findColors';
import fillSlice from './fillSlice';
import drawInterval from './drawInterval';

export default function Display({className, activePitches, baseFrequencies, diameter, mode, pitchSequence}) {
  const rootNode = useRef();

  const [root, setRoot] = useState(null);
  const [buffer, setBuffer] = useState(null);
  useEffect(() => {
    if (!rootNode.current) {
      return;
    }
    setRoot(new Canvas(rootNode.current));
    setBuffer(new Canvas(undefined, diameter, diameter));
  }, [rootNode, diameter]);

  useEffect(() => {
    if (!root) {
      return;
    }
    root.resize(diameter, diameter);
    buffer.resize(diameter, diameter);
  }, [root, buffer, diameter]);

  useEffect(() => {
    if (!root) {
      return;
    }

    const semitones = pitchSequence.length;
    const colors = findColors(semitones);

    function connectPitches() {
      for (let i = 0; i < activePitches.length; i++) {
        const pitchA = activePitches[i];
        const degreesA = 360 / semitones * pitchSequence.indexOf(pitchA);
        const frequencyA = baseFrequencies[pitchSequence.indexOf(pitchA)];
        for (let j = i + 1; j < activePitches.length; j++) {
          const pitchB = activePitches[j];
          const degreesB = 360 / semitones * pitchSequence.indexOf(pitchB);
          const frequencyB = baseFrequencies[pitchSequence.indexOf(pitchB)];
          const colorA = colors[pitchA];
          const colorB = colors[pitchB]
          drawInterval(toRadianDirection(degreesA), toRadianDirection(degreesB), diameter, buffer, 0.4, frequencyA, frequencyB, colorA, colorB);
        }
      }
    }

    function drawSlices() {
      const halfSlice = RADIANS_IN_CIRCLE / semitones / 2;
      const {chords} = MODES[mode];

      for (let i = 0; i < semitones; i++) {
        const pitch = pitchSequence[i];
        const degrees = pitch / semitones * 360;
        const color = colors[i];
        const isActive = activePitches.indexOf(i) >= 0;
        const radians = toRadianDirection(degrees);
        const isInKey = !!chords[i];

        fillSlice(buffer, color, diameter, radians - halfSlice, radians + halfSlice, isActive ? 1 : 0.95, isActive ? 0.12 : 0.1, isInKey);
      }
    }

    root.clearRect();
    buffer.clearRect();
    drawSlices();
    connectPitches();
    root.drawImage(buffer);
  }, [activePitches, baseFrequencies, diameter, mode, pitchSequence, buffer, root]);

  return <canvas className={classnames(styles.root, className)} ref={rootNode} />;
}
