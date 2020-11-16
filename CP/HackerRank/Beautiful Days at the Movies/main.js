// Sample Input

// 20 23 6
// Sample Output

// 2

// Code

const beautifulDays = (i, j, k) => {
  let result = 0;
  for (i; i <= j; i++) {
    let temp = i - i.toString().split("").reverse().join("");
    if ((temp >= 0 ? temp : -1 * temp) % k === 0) {
      result++;
    }
  }
  return result;
}
console.log(beautifulDays(20, 23, 6))