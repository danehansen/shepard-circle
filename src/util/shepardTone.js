import {HUMAN_MAX_FREQ, transposeFrequency, CENTS_PER_OCTAVE} from 'util/music';
import {EQ_FREQUENCIES} from 'util/constants';
import findBaseFrequency from 'util/findBaseFrequency';

let audioContext;
let headNode;
let currentOscillators = {};

export function initializaAudio(eq) {
  if (audioContext) {
    audioContext.close();
  }
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);

  // TODO: figure out this gain value
  gainNode.gain.value = 0.1;

  headNode = gainNode;
  for(let i = 0; i < eq.length; i++) {
    const eqNode = audioContext.createBiquadFilter();

    if (i === 0) {
      eqNode.type = 'lowshelf'
    } else if (i === eq.length - 1) {
      eqNode.type = 'highshelf'
    } else {
      eqNode.type = 'peaking'
      // eqNode.Q.value = 1; // 0.0001 to 1000
    }
    eqNode.frequency.value = EQ_FREQUENCIES[i];
    eqNode.gain.value = eq[i] * 40;
    eqNode.connect(headNode)
    headNode = eqNode;
  }
  gainNode.connect(headNode);

  Object.values(currentOscillators).forEach(oscillator => {
    oscillator.stop();
    oscillator.disconnect();
  });
  currentOscillators = {};
}

function findAudibleOctaves(frequency) {
  const frequencies = [];
  while(frequency < HUMAN_MAX_FREQ) {
    frequencies.push(frequency);
    frequency *= 2;
  }
  return frequencies;
}

export function playPitchClasses(pitchClasses, transposition, oscillatorType, a4, semitones) {
  if (!audioContext) {
    return;
  }
  const oldOscillators = currentOscillators;
  const newOscillators = {};
  const nonExistingOscillators = [];
  const rootFrequency = transposeFrequency(a4, transposition);
  const baseFrequencies = [];
  const allFrequencies = [];

  // find all manual and toggled frequencies
    for (let i = 0; i < pitchClasses.length; i++) {
      const pitchClass = pitchClasses[i];
      const fraction  = pitchClass / semitones;
      const cents = fraction * CENTS_PER_OCTAVE;
      const frequency = transposeFrequency(rootFrequency, cents);
      const baseFrequency = findBaseFrequency(frequency);
      baseFrequencies.push(baseFrequency);
    }

  // add all octaves
    for(const baseFrequency of baseFrequencies) {
      allFrequencies.push(...findAudibleOctaves(baseFrequency));
    }

  // keep existing matching oscillators going
    for (const frequency of allFrequencies) {
      const oscillator = oldOscillators[frequency];
      if (oscillator) {
        newOscillators[frequency] = oscillator;
        delete oldOscillators[frequency];
      } else {
        nonExistingOscillators.push(frequency);
      }
    }

  const leftoverOscillators = Object.values(oldOscillators);

  // reuse remaining oscillators or make new ones for remaning frequencies
    for(const frequency of nonExistingOscillators) {
      let oscillator;
      if (leftoverOscillators.length) {
        oscillator = leftoverOscillators.pop();
        oscillator.frequency.setValueAtTime(frequency, 0);
      } else {
        oscillator = audioContext.createOscillator();
        oscillator.type = oscillatorType;
        oscillator.frequency.value = frequency;
        oscillator.connect(headNode);
        oscillator.start();
      }
      newOscillators[frequency] = oscillator;
    }

  // kill any leftover osciilators
    leftoverOscillators.forEach(oscillator => {
      oscillator.stop();
      oscillator.disconnect();
    });
    currentOscillators = newOscillators;
}
