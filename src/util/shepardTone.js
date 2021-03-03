import {MAX_FREQ} from '../constants';

let frequencies;
let currentOscillators;
let audioCtx;
let gainNode;

export function initializaAudio(baseFrequencies) {
  if (audioCtx) {
    audioCtx.close();
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();

  gainNode.connect(audioCtx.destination);

  // TODO: figure out this gain value
  gainNode.gain.value = 0.1;

  currentOscillators = [];
  frequencies = [];
  frequencies = baseFrequencies.map(function(frequency) {
    return findAudibleOctaves(frequency);
  })
}

function findAudibleOctaves(frequency) {
  const frequencies = [];
  while(frequency < MAX_FREQ) {
    frequencies.push(frequency);
    frequency *= 2;
  }
  return frequencies;
}

function startNote(index, type) {
  const oscillators = [];
  currentOscillators[index] = oscillators;
  for(const frequency of frequencies[index]) {
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    oscillator.connect(gainNode);
    oscillator.start();
    oscillators.push(oscillator);
  }
}

function stopNote(index) {
  for(const oscillator of currentOscillators[index]) {
    oscillator.stop();
  }
  currentOscillators[index] = null;
}

export function toggleNote(note, isPlaying, type) {
  if (isPlaying && !currentOscillators[note]) {
    startNote(note, type);
  } else if (!isPlaying && currentOscillators[note]) {
    stopNote(note);
  }
}
