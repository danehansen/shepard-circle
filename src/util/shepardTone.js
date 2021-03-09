import {MAX_FREQ, MIN_FREQ, EQ_FREQUENCIES} from './music';

let frequencies;
let currentOscillators;
let audioContext;
let gainNode;
let headNode;

export function initializaAudio(baseFrequencies, eq) {
  if (audioContext) {
    audioContext.close();
  }
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);

  // TODO: figure out this gain value
  gainNode.gain.value = 0.1;

  headNode = gainNode;
  for(let i = 0; i < eq.length; i++) {
    const eqNode = audioContext.createBiquadFilter();

    if (i == 0) {
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

  currentOscillators = [];
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
    const oscillatorNode = audioContext.createOscillator();
    oscillatorNode.frequency.value = frequency;
    oscillatorNode.type = type;
    oscillatorNode.connect(headNode);
    oscillatorNode.start();
    oscillators.push(oscillatorNode);
  }
}

function stopNote(index) {
  for(const oscillator of currentOscillators[index]) {
    oscillator.stop();
  }
  currentOscillators[index] = null;
}

export function toggleNote(note, isPlaying, type) {
  if (!currentOscillators) {
    return;
  }
  if (isPlaying && !currentOscillators[note]) {
    startNote(note, type);
  } else if (!isPlaying && currentOscillators[note]) {
    stopNote(note);
  }
}
