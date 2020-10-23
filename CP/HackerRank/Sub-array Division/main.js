// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2
// Code
// Complete the birthday function below.
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum = sum + s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}