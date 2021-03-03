// const MAX_INT = 16;
// const TOLERANCE = 0.5 / MAX_INT;

// export default function(fA2small, fE3large) {
//   const numeratorA2small = fA2small;
//   let denominatorE3large = fE3large;
//   // const isSwapped = fE3large === numerator;
//   while(denominatorE3large < numeratorA2small) {
//     // console.log('a')
//   	denominatorE3large *= 2;
//   }
//   while(denominatorE3large / 2 > numeratorA2small) {
//     // console.log('b')
//   	denominatorE3large /= 2;
//   }
//
//   console.log('HERE', numeratorA2small, denominatorE3large);
//   let closestRatio = TOLERANCE * 5;
//   let closestNumeratorA2small = MAX_INT;
//   let closestDenominatorE3large = MAX_INT;
//   for (let n = 1; n <= MAX_INT; n++) {
// 		for (let d = 1; d <= MAX_INT; d++) {
//      	let difference = findDifference(numeratorA2small / denominatorE3large, n / d);
//       const differenceIsSmall = difference < TOLERANCE;
//       const differenceIsSmallest = difference < closestRatio;
//       if (differenceIsSmall || differenceIsSmallest) {
//         console.log(differenceIsSmall, differenceIsSmallest, difference, TOLERANCE)
//       // if (difference < TOLERANCE || difference < closestRatio) {
//       // if (difference < closestRatio) {
//         if ((n + d) <= (closestNumeratorA2small + closestDenominatorE3large)) {
//           closestRatio = difference;
//           closestNumeratorA2small = n;
//           closestDenominatorE3large = d;
//           console.log(n + d, closestNumeratorA2small + closestDenominatorE3large, difference, TOLERANCE);
//         }
//       }
//   	}
//   }
//   return [closestNumeratorA2small, closestDenominatorE3large];
// }

function findDifference(a, b) {
  return Math.abs(a - b);
}

export default function(fRoot, fComparison) {
  // const numerators = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  // const denominators = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const numerators = [15,9,5,5,3,25];
  const denominators = [8,8,3,4,2,18];

  while(fRoot > fComparison) {
  	fComparison *= 2;
  }
  while(fComparison / 2 > fRoot) {
   	fComparison /= 2;
  }

  let lowestDifference = 20;
  let lowestDifferenceNumerator = 20;
  let lowestDifferenceDenominator = 20;

  for (let i = 0; i < numerators.length; i++) {
    for (let j = 0; j < denominators.length; j++) {
      const newPitch = fRoot * (numerators[i] / denominators[j]);
      const difference = findDifference(newPitch, fComparison);
      if (difference < lowestDifference) {
        // console.log('a', fRoot, fComparison, newPitch, difference);
        lowestDifference = difference;
        lowestDifferenceNumerator = denominators[j];
        lowestDifferenceDenominator = numerators[i];
      }

      const newPitch2 = (fComparison / 2) * (numerators[i] / denominators[j]);
      const difference2 = findDifference(newPitch2, fRoot);
      if (difference2 < lowestDifference) {
        // console.log('b', fRoot, fComparison, newPitch2, difference2);
        lowestDifference = difference2;
        lowestDifferenceNumerator = numerators[i];
        lowestDifferenceDenominator = denominators[j];
      }
    }
  }

  return [lowestDifferenceNumerator, lowestDifferenceDenominator];
}
