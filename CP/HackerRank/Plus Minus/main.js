// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667

// Code

const plusMinus = (arr) => {
  let len = arr.length;
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;
  for (let item of arr) {
    if (item === 0) {
      zeroCounter++;
    } else if (item > 0) {
      positiveCounter++;
    } else {
      negativeCounter++;
    }
  }
  if (positiveCounter) {
    console.log(positiveCounter / len);
  } else {
    console.log(positiveCounter);
  }
  if (negativeCounter) {
    console.log(negativeCounter / len);
  } else {
    console.log(negativeCounter);
  }
  if (zeroCounter) {
    console.log(zeroCounter / len);
  }
  else {
    console.log(zeroCounter);
  }
}

plusMinus([-4, 3, -9, 0, 4, 1]);

