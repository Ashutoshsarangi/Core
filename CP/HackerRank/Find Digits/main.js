// Sample Input

// 2
// 12
// 1012
// Sample Output

// 2
// 3
// Code

const findDigits = (n) => {
  let result = 0;
  let num = n;
  while (num > 0) {
    const temp = num % 10;
    if (n % temp === 0) {
      result++;
    }
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(findDigits(114108089));