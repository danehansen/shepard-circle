import {primes} from '@danehansen/math';

export default function simplifyFraction(numerator, denominator, tolerance = 0) {
  if (numerator === 0) {
    return [0,0];
  }
  if (denominator === 0) {
    return [numerator > 0 ? Infinity : -Infinity, 1];
  }
  while(numerator > Math.abs(denominator)) {
    numerator -= Math.abs(denominator);
  }
  while(Math.abs(numerator) > Math.abs(denominator)) {
    numerator += Math.abs(denominator);
  }

  const [increasedNumerator, increasedDenominator] = increaseFraction(numerator, denominator, tolerance);
  return reduceFraction(increasedNumerator, increasedDenominator);
}

function reduceFraction(numerator, denominator) {
  let commonPrime;
  do {
    commonPrime = findDivisibleCommonPrime(numerator, denominator);
    if (commonPrime !== 1) {
      numerator /= commonPrime;
      denominator /= commonPrime;
    }
  }
  while(commonPrime !== 1)
  if (denominator < 0 && numerator > 0) {
    numerator *= -1;
    denominator *= -1;
  }
  return [numerator, denominator];
}

function findDivisibleCommonPrime(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  let result = 1;
  primes(Math.min(a, b)).find((prime) => {
    if (a % prime === 0 && b % prime === 0) {
      result = prime;
      return true;
    }
    return false;
  })
  return result;
}

function increaseFraction(numerator, denominator, tolerance = 0, giveUpAt = 100) {
  let multiplier = 1;
  while (multiplier < giveUpAt && Math.max(distanceFromInteger(numerator * multiplier), distanceFromInteger(denominator * multiplier)) > tolerance) {
    multiplier++;
  }
  return [Math.round(numerator * multiplier), Math.round(denominator * multiplier)];
}

function distanceFromInteger(float) {
  return Math.abs(Math.round(float) - float);
}
