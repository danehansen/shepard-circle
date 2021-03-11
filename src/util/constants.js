import {CENTS_PER_STANDARD_SEMITONE, HUMAN_MAX_FREQ, HUMAN_MIN_FREQ} from './music';

export const DEFAULT_TRANSPOSITION = 3 * CENTS_PER_STANDARD_SEMITONE;
export const DEGREES_IN_CIRCLE = 360;
export const RADIANS_IN_CIRCLE = Math.PI * 2;

export const EQ_FREQUENCIES = [];
let frequency = 2;
while(frequency < HUMAN_MAX_FREQ) {
  frequency *= 2;
  if (frequency >= HUMAN_MIN_FREQ && frequency <= HUMAN_MAX_FREQ) {
    EQ_FREQUENCIES.push(frequency);
  }
}

export const MODES = [
  {
    name: '(none)',
    chords: [],
  },
  {
    name: 'I ionian (major)',
    chords: ['I', null, 'ii', null, 'iii', 'IV', null, 'V', null, 'vi', null, 'viiº'],
  },
  {
    name: 'II dorian',
    chords: ['i', null, 'ii', 'III', null, 'IV', null, 'v', null, 'viº', 'VII', null],
  },
  {
    name: 'III phrygian',
    chords: ['i', 'II', null, 'III', null, 'iv', null, 'vº', 'VI', null, 'vii', null],
  },
  {
    name: 'IV lydian',
    chords: ['I', null, 'II', null, 'iii', null, 'ivº ', 'V', null, 'vi', null, 'vii'],
  },
  {
    name: 'V mixolydian',
    chords: ['I', null, 'ii', null, 'iiiº', 'IV', null, 'v', null, 'vi', 'VII', null],
  },
  {
    name: 'VI aeolian (minor)',
    chords: ['i', null, 'iiº', 'III', null, 'iv', null, 'v', 'VI', null, 'VII', null],
  },
  {
    name: 'VII locrian',
    chords: ['iº', 'II', null, 'iii', null, 'iv', 'V',  null, 'VI', null, 'vii', null],
  },
  {
    name: 'major pentatonic',
    chords: ['I', null, 'ii', null, 'iii', null, null, 'V', null, 'vi', null, null],
  },
  {
    name: 'minor pentatonic',
    chords: ['i', null, null, 'III', null, 'iv', null, 'v', null, null, 'VII', null],
  },
  {
    name: 'blues major',
    chords: ['I', null, 'ii', null, null, 'IV', null, 'v', null, 'vi', null, null],
  },
  {
    name: 'blues minor',
    chords: ['i', null, null, 'III', null, 'iv', null, null, 'VI', null, 'vii', null],
  },
  {
    name: 'egyptian',
    chords: ['i', null, 'ii', null, null, 'IV', null, 'v', null, null, 'VII', null],
  },
];

export const OSCILLATOR_TYPES = {
  SINE: 'sine',
  SQUARE: 'square',
  // SAWTOOTH: 'sawtooth',
  TRIANGLE: 'triangle',
};

export const TEMPERMENT_TYPES = {
  EQUAL: 'equal',
  JUST: 'just',
  MEANTONE: 'meantone',
  PYTHAGOREAN: 'pythagorean',
};
