export default function(pitchA, pitchB, semitones) {
  if (semitones === 12) {
    switch(pitchA - pitchB) {
      case 1:
        return {a: 16, b: 15};
      case 2:
        return {a: 9, b: 8};
      case 3:
        return {a: 6, b: 5};
      case 4:
        return {a: 5, b: 4};
      case 5:
        return {a: 4, b: 3};
      case 6:
        return {a: 7, b: 5};
      case 7:
        return {a: 3, b: 2};
      case 8:
        return {a: 8, b: 5};
      case 9:
        return {a: 5, b: 3};
      case 10:
        return {a: 16, b: 9};
      case 11:
        return {a: 15, b: 8};
    }

    switch(pitchB - pitchA) {
      case 1:
        return {a: 15, b: 16};
      case 2:
        return {a: 8, b: 9};
      case 3:
        return {a: 5, b: 6};
      case 4:
        return {a: 4, b: 5};
      case 5:
        return {a: 3, b: 4};
      case 6:
        return {a: 5, b: 7};
      case 7:
        return {a: 2, b: 3};
      case 8:
        return {a: 5, b: 8};
      case 9:
        return {a: 3, b: 5};
      case 10:
        return {a: 9, b: 16};
      case 11:
        return {a: 8, b: 15};
    }
  }
}
