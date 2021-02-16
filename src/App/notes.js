import toggleShepardTone from './shepardTone';

const NOTES = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];

export const CHROMATIC_NOTES = NOTES.map(function(note, i) {
  return {
    label: note,
    index: i,
    play: toggleShepardTone.bind(null, i, true),
    pause: toggleShepardTone.bind(null, i, false),
  }
});

export const FIFTH_NOTES = [];
while(FIFTH_NOTES.length < NOTES.length) {
  FIFTH_NOTES.push(CHROMATIC_NOTES[
    ((FIFTH_NOTES.length * 7) + 6) 
    % NOTES.length])
}
