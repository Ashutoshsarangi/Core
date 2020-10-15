// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix
// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15

// Code
const diagonalDifference = (arr) => {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        leftDiagonalSum = leftDiagonalSum + arr[i][j];
      }
    }
    rightDiagonalSum = rightDiagonalSum + arr[i][arr[i].length - (i + 1)];
  }
  result = leftDiagonalSum - rightDiagonalSum;
  if (result < 0) {
    return result * (-1);
  } else {
    return result;
  }
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));