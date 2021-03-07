import {MAX_FREQ, MIN_FREQ} from './music';

let frequencies;
let currentOscillators;
let audioCtx;
let gainNode;

export function initializaAudio(baseFrequencies, eq) {
  if (audioCtx) {
    audioCtx.close();
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();

  gainNode.connect(audioCtx.destination);

  // TODO: figure out this gain value
  gainNode.gain.value = 0.1;

  const freqencyStep = (MAX_FREQ - MIN_FREQ) / (eq.length - 1);

  // const eqNodes = [];
  // const eqParams = [];
  // let headNode = audioCtx.destination;
  // for(let i = 0; i < eq.length; i++) {
  //   const eqNode = audioCtx.createBiquadFilter();
  //   eqNode.frequency.value = freqencyStep * i + MIN_FREQ;
  //   // eqNode.type = 'lowshelf'
  //   // eqNode.type = 'highshelf'
  //   // eqNode.type = 'peaking'
  //   eqNode.type = 'notch'
  //   eqNode.connect(headNode)
  //   eqNodes.push(eqNode)
  //   eqParams.push({
  //     frequency: eqNode.frequency, //hz
  //     Q: eqNode.Q,
  //     gain: eqNode.gain, // dB
  //   });
  //   headNode = eqNode;
  // }
  // gainNode.connect(headNode);
  //
  // for (let i = 0; i < eq.length; i++) {
  //   eqNodes[i].gain.value = eq[i];
  // }

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
  if (!currentOscillators) {
    return;
  }
  if (isPlaying && !currentOscillators[note]) {
    startNote(note, type);
  } else if (!isPlaying && currentOscillators[note]) {
    stopNote(note);
  }
}
