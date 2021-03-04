export const MIN_FREQ = 20;
export const MAX_FREQ = 20000;
export const DEFAULT_SEMITONES = 12;
export const PITCH_NAMES = ['A', 'A♯/B♭', 'B', 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭'];
export const CHORD_NAMES = ['I', null, 'ii', null, 'iii', 'IV', null, 'V', null, 'vi', null, 'viiº'];
export const MODES = ['ionian (major)', null, 'dorian', null, 'phrygian', 'lydian', null, 'mixolydian', null, 'aeolian (minor)', null, 'locrian'];

export const OSCILLATOR_TYPES = {
  SINE: 'sine',
  SQUARE: 'square',
  SAWTOOTH: 'sawtooth',
  TRIANGLE: 'triangle',
};

export const TEMPERMENT_TYPES = {
  EQUAL: 'equal',
  JUST: 'just',
  MEANTONE: 'meantone',
  PYTHAGOREAN: 'pythagorean',
};
