import findAllPitchNames from 'util/findAllPitchNames';
import {MODES} from 'util/constants';

export default function findBestPitchNames(transposition, modeIndex) {
  let lowestNumOfIncidentals = Number.MAX_VALUE;
  let lowestNames = [];
  for (let t = transposition; t < 1200 + transposition; t += 100) {
    for (let m = modeIndex; m <= 7 + modeIndex; m++) {
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

function countKeyIncidentals(transposition, modeIndex, names) {
  const {chords} = MODES[modeIndex];
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
