// Sample Input 0

// 2
// 1 2 3
// 1 3 2
// Sample Output 0

// Cat B
// Mouse C
// Code
const catAndMouse = (x, y, z) => {
  let distanceA_C = (x - z) < 0 ? -1 * (x - z) : (x - z);
  let distanceB_C = (y - z) < 0 ? -1 * (y - z) : (y - z);
  if (distanceA_C > distanceB_C) {
    return 'Cat B';
  } else if (distanceA_C < distanceB_C) {
    return 'Cat A';
  } else {
    return 'Mouse C';
  }
}

console.log(catAndMouse(1, 2, 3));