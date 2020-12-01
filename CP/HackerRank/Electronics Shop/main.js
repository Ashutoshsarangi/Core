// Sample Input 0

// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0

// 9
// Code
const getMoneySpent = (keyboards, drives, b) => {
  let max = -1;
  for (let keyboard of keyboards) {
    for (let drive of drives) {
      let temp = keyboard + drive;
      if (temp <= b && temp > max) {
        max = temp;
      }
    }
  }
  return max;
}
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));