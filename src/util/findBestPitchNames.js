import findAllPitchNames from './findAllPitchNames';
import {MODES} from './constants';

export default function findBestPitchNames(transposition, mode) {
  let lowestNumOfIncidentals = Number.MAX_VALUE;
  let lowestNames = [];
  for (let t = transposition; t < 1200 + transposition; t += 100) {
    for (let m = mode; m <= 7 + mode; m++) {
      const names = findAllPitchNames(t % 1200, (m % 7) +1);
      const incidentals = countKeyIncidentals(t % 1200, (m % 7) +1, names);
      if (incidentals < lowestNumOfIncidentals) {
        lowestNumOfIncidentals = incidentals;
        lowestNames = [names];
      } else if (incidentals === lowestNumOfIncidentals) {
        lowestNames.push(names);
      }
    }
  }
  return lowestNames[0];
}

function countKeyIncidentals(transposition, mode, names) {
  const {chords} = MODES[mode];
  let str = '';
  for (let i = 0; i < chords.length; i++) {
    if (chords[i]) {
      str += names[i];
    }
  }
  const regex = /[♭♯]/gi;
  const match = str.match(regex);
  if (!match) {
    return 0;
  }

  return match.length;
}
