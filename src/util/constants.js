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
    useModeForNaming: 1,
  },
  {
    name: 'I Ionian (Major)',
    chords: ['I', null, 'ii', null, 'iii', 'IV', null, 'V', null, 'vi', null, 'viiº'],
  },
  {
    name: 'II Dorian',
    chords: ['i', null, 'ii', 'III', null, 'IV', null, 'v', null, 'viº', 'VII', null],
  },
  {
    name: 'III Phrygian',
    chords: ['i', 'II', null, 'III', null, 'iv', null, 'vº', 'VI', null, 'vii', null],
  },
  {
    name: 'IV Lydian',
    chords: ['I', null, 'II', null, 'iii', null, 'ivº ', 'V', null, 'vi', null, 'vii'],
  },
  {
    name: 'V Mixolydian',
    chords: ['I', null, 'ii', null, 'iiiº', 'IV', null, 'v', null, 'vi', 'VII', null],
  },
  {
    name: 'VI Aeolian (Minor)',
    chords: ['i', null, 'iiº', 'III', null, 'iv', null, 'v', 'VI', null, 'VII', null],
  },
  {
    name: 'VII Locrian',
    chords: ['iº', 'II', null, 'iii', null, 'iv', 'V',  null, 'VI', null, 'vii', null],
  },
  {
    name: 'Major Pentatonic',
    chords: ['I', null, 'ii', null, 'iii', null, null, 'V', null, 'vi', null, null],
    useModeForNaming: 1,
  },
  {
    name: 'Minor Pentatonic',
    chords: ['i', null, null, 'III', null, 'iv', null, 'v', null, null, 'VII', null],
    useModeForNaming: 6,
  },
  {
    name: 'Blues Major',
    chords: ['I', null, 'ii', null, null, 'IV', null, 'v', null, 'vi', null, null],
    useModeForNaming: 1,
  },
  {
    name: 'Blues Minor',
    chords: ['i', null, null, 'III', null, 'iv', null, null, 'VI', null, 'vii', null],
    useModeForNaming: 6,
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


export const CHORD_TYPES = [
  {
    name: 'major',
    suffix: '',
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700],
  },
  {
    name: 'minor',
    suffix: '',
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700],
  },
  {
    name: 'augmented',
    suffix: '+',
    textTransform: 'toUpperCase',
    additionalPitches: [400, 800],
  },
  {
    name: 'diminished',
    suffix: 'º',
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600],
  },
  {
    name: 'major sixth',
    suffix: <sup>6</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 900],
  },
  {
    name: 'minor sixth',
    suffix: <sup>6</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 900],
  },
  {
    name: 'dominant seventh',
    suffix: <sup>7</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 1000],
  },
  {
    name: 'major seventh',
    suffix: <sup>∆7</sup>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 700, 1100],
  },
  {
    name: 'minor seventh',
    suffix: <sup>7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 1000],
  },
  {
    name: 'augmented seventh',
    suffix: <>+<sup>∆7</sup></>,
    textTransform: 'toUpperCase',
    additionalPitches: [400, 800, 1000],
  },
  {
    name: 'minor-major seventh',
    suffix: <sup>M7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 700, 1100],
  },
  {
    name: 'diminished seventh',
    suffix: <>º<sup>7</sup></>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600, 900],
  },
  {
    name: 'half-diminished seventh',
    suffix: <sup>ø7</sup>,
    textTransform: 'toLowerCase',
    additionalPitches: [300, 600, 1000],
  },
];
