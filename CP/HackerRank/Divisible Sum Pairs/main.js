// Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

// divisibleSumPairs has the following parameter(s):

// n: the integer length of array 
// ar: an array of integers
// k: the integer to divide the pair sum by

// Sample Input

// 6 3
// 1 3 2 6 1 2
// Sample Output

//  5

// Code

const divisibleSumPairs = (n, k, ar) => {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
  return result;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
