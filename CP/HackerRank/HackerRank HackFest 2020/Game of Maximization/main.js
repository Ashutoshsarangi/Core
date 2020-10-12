// Print a single integer denoting the maximum total number of stones you can pick.

// Sample Input 0

// 4
// 5 1 1 4
// Sample Output 0

// 10

// Code

const maximumStones = (arr) => {
  let result = 0;
  let evenSum = 0;
  let oddSum = 0;
  let factor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum = evenSum + arr[i];
    } else {
      oddSum = oddSum + arr[i];
    }
  }
  factor = evenSum - oddSum;
  if (factor < 0) {
    factor = -1 * factor;
  }
  result = evenSum + oddSum - factor;
  return result;
}
// console.log(maximumStones([5, 1, 1, 4])); 
console.log(maximumStones([2, 1, 2])); 