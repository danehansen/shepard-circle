const A = 440;
const MIN_FREQ = 20;
const MAX_FREQ = 20000;

const CURRENT_NOTES = [];
const AUDIO_CONTEXTS = [];

function initializeContext(index) {
  const START_FREQ = A / Math.pow(2, 4);
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const gainNode = audioCtx.createGain();
  const steps_per_loop = 12;
  const multiplier = Math.pow(2, 1 / steps_per_loop);
  const oscillators = [];

  gainNode.connect(audioCtx.destination);
  gainNode.gain.value = 100 / 100 / 12;

  for(let i = START_FREQ; i <= MAX_FREQ; i *= 2) {
    const freq = i * Math.pow(multiplier, index);
    if (freq < MIN_FREQ) {
      continue;
    } else if (freq > MAX_FREQ) {
      break;
    }
    const oscillator = audioCtx.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(gainNode);
    oscillator.start(0);
    oscillators[i] = oscillator;
  }
  audioCtx.suspend();
  AUDIO_CONTEXTS[index] = audioCtx;
}

function startNote(index) {
  CURRENT_NOTES[index] = true;
  if (!AUDIO_CONTEXTS[index]) {
    initializeContext(index);
  } else {
    AUDIO_CONTEXTS[index].resume();
  }
}

function stopNote(index) {
  AUDIO_CONTEXTS[index].suspend();
  CURRENT_NOTES[index] = false;
}

export default function toggleNote(note, isPlaying) {
  if (isPlaying && !CURRENT_NOTES[note]) {
    startNote(note);
  } else if (!isPlaying && CURRENT_NOTES[note]) {
    stopNote(note);
  }
}

export function initializaAudioContexts() {
  for (let i = 0; i < 12; i++) {
    initializeContext(i);
  }
}
