// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// Sample Input

// 2 3
// 2 4
// 16 32 96
// Sample Output

// 3
// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

// Code

const getTotalX = (a, b) => {
  // Modular Pattern
  const checkFactor = (arr, n, max = false) => {
    let tempCounter = 0;
    for (let item of arr) {
      if (max) {
        if (item % n === 0) {
          tempCounter++;
        }
      } else {
        if (n % item === 0) {
          tempCounter++;
        }
      }
    }
    console.log('temp Counter', tempCounter, n);
    if (tempCounter === arr.length) {
      return true;
    } else {
      return false;
    }
  }

  let result = 0;
  let cnt = 0;
  const min = Math.min(...a);
  const max = Math.max(...b);
  if (a.length > 1) {
    cnt = 1;
  }
  // if (b.length === 1) {
  //   cnt = 1
  // }
  for (let i = min + cnt; i <= max; i++) {
    if (checkFactor(a, i) && checkFactor(b, i, true)) {
      result++;
    }
  }
  return result;
}
// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([1], [100]));

