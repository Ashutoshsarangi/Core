// Sample Input

// 5
// 3 3 2 1 3
// Sample Output

// 2   

// Code
const equalizeArray = (arr) => {
  let max = -9999;
  let temp = {};
  for (let item of arr) {
    if (temp[item]) {
      temp[item] = temp[item] + 1;
    } else {
      temp[item] = 1;
    }
  }
  for (let item in temp) {
    if (max < temp[item]) {
      max = temp[item];
    }
  }
  return arr.length - max;
}
console.log(equalizeArray([3, 3, 2, 1, 3]))