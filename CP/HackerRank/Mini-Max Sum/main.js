// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

// Code

const miniMaxSum = (arr) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum = sum + arr[j];
      }
    }
    temp.push(sum);
  }
  console.log(Math.min(...temp), Math.max(...temp));
}

miniMaxSum([1, 2, 3, 4, 5]);