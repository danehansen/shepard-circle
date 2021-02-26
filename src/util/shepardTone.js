let frequencies;
let currentOscillators;
let audioCtx;
let gainNode;

export function initializaAudio(semitones, a4, minFreq, maxFreq) {
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
  for(let i = 0; i < semitones; i++) {
    frequencies[i] = findFrequencies(i, a4, minFreq, maxFreq, semitones)
  }
}

function findFrequencies(distance, a4, minFreq, maxFreq, semitones) {
  let lowestFrequency = a4 * Math.pow(Math.pow(2, 1 / semitones), distance);

  while(lowestFrequency >= minFreq) {
    lowestFrequency /= 2;
  }
  lowestFrequency *= 2;

  const frequencies = [];
  for (let currentFrequency = lowestFrequency; currentFrequency <= maxFreq; currentFrequency *= 2) {
    frequencies.push(currentFrequency);
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
