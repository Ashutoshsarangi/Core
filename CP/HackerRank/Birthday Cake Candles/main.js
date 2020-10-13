// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2

// Code

const birthdayCakeCandles = (candles) => {
  let maxItem = Math.max(...candles);
  let result = candles.reduce((acc, item) => (item === maxItem ? acc + 1 : acc), 0);
  return result;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));