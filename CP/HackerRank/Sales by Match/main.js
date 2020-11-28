// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3
// Code
const sockMerchant = (n, ar) => {
  let result = 0;
  let temp = {};
  for (let item of ar) {
    if (temp[item] === 2) {
      result = result + 1;
      temp[item] = 1;
    } else if (temp[item]) {
      temp[item] = temp[item] + 1;
    } else {
      temp[item] = 1;
    }
  }
  for (let item in temp) {
    if (temp[item] === 2) {
      result++;
    }
  }
  return result;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
