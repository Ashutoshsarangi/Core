// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1

// Code

const countingValleys = (steps, path) => {
  let result = 0;
  let valley = 0;
  for (let item of path) {
    if (item === 'U') {
      result++;
    } else if (item === 'D') {
      result--;
    }
    if (result === 0 && item === 'U') {
      valley++;
    }
  }
  return valley;
}
console.log(countingValleys(8, 'UDDDUDUU'));