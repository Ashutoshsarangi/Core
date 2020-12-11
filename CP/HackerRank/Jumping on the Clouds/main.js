// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4

// Code
const jumpingOnClouds = (c) => {
  let result = 0;
  let flag = true;
  for (let i = 0; i < c.length - 1;) {
    if (c[i + 2] === 0) {
      result++;
      flag = false;
      i = i + 2;
    } else if (c[i + 1] != 1 && flag) {
      result++;
      i = i + 1;
    }
    flag = true;
  }
  return result;
}
// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
