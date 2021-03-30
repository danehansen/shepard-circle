import styles from './Display.module.scss';
import classnames from 'classnames';
import React from 'react';
import Canvas from './canvas';
import {toRadianDirection} from '@danehansen/math';
import {MODES, RADIANS_IN_CIRCLE, DEGREES_IN_CIRCLE} from 'util/constants';
import {STANDARD_SEMITONES} from 'util/music';
import {useState, useEffect, useRef} from 'react';
import findColors from './findColors';
import fillSlice from './fillSlice';
import drawInterval from './drawInterval';

export default function Display({className, soundingPitchClasses, baseFrequencies, diameter, mode, pitchSequence}) {
  const rootNode = useRef();

  const [root, setRoot] = useState(null);
  const [buffer, setBuffer] = useState(null);
  useEffect(() => {
    if (!rootNode.current) {
      return;
    }
    setRoot(new Canvas(rootNode.current, diameter, diameter));
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
      for (let i = 0; i < soundingPitchClasses.length; i++) {
        const pitchClassA = soundingPitchClasses[i];
        const sequenceIndexA = pitchSequence.indexOf(Math.round(pitchClassA[0] / pitchClassA[1] * STANDARD_SEMITONES));
        const degreesA = DEGREES_IN_CIRCLE / semitones * sequenceIndexA;
        const frequencyA = baseFrequencies[sequenceIndexA];
        for (let j = i + 1; j < soundingPitchClasses.length; j++) {
          const pitchClassB = soundingPitchClasses[j];
          const sequenceIndexB = pitchSequence.indexOf(Math.round(pitchClassB[0] / pitchClassB[1] * STANDARD_SEMITONES));
          const degreesB = DEGREES_IN_CIRCLE / semitones * sequenceIndexB;
          const frequencyB = baseFrequencies[sequenceIndexB];
          const colorA = colors[sequenceIndexA];
          const colorB = colors[sequenceIndexB];
          drawInterval(toRadianDirection(degreesA), toRadianDirection(degreesB), diameter, buffer, 0.4, frequencyA, frequencyB, colorA, colorB);
        }
      }
    }

    function drawSlices() {
      const halfSlice = RADIANS_IN_CIRCLE / semitones / 2;
      const {chords} = MODES[mode];

      for (let i = 0; i < semitones; i++) {
        const pitch = pitchSequence[i];
        const degrees = pitch / semitones * DEGREES_IN_CIRCLE;
        const color = colors[i];
        const isActive = soundingPitchClasses.some((pitchClass) => i / STANDARD_SEMITONES === pitchClass[0] / pitchClass[1]);
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
  }, [soundingPitchClasses, baseFrequencies, diameter, mode, pitchSequence, buffer, root]);

  return <canvas className={classnames(styles.root, className)} ref={rootNode} />;
}
