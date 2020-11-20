// Sample Input 0

// 6
// 5 4 4 2 2 8
// Sample Output 0

// 6
// 4
// 2
// 1

// Code

const cutTheSticks = (arr, val) => {
  console.log(arr);
  let min = Math.min(...arr);
  if (arr.length === 1 || arr.length == 0) {
    return val;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - min;
  }
  let result = arr.filter((data) => {
    return data !== 0;
  });
  return (cutTheSticks(result, [...val, arr.length]));
}
// console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]).split(-));
let are = [23, 74, 26, 23, 92, 92, 44, 13, 34, 23, 69, 4, 19, 94, 94, 38, 14, 9, 51, 98, 72, 46, 17, 25, 21, 87, 99, 50, 59, 53, 82, 24, 93, 16, 88, 52, 14, 38, 27, 7, 18, 81, 13, 75, 80, 11, 29, 39, 37, 78, 55, 17, 78, 12, 77, 84, 63, 29, 68, 32, 17, 55, 31, 30, 3, 17, 99, 6, 45, 81, 75, 31, 50, 93, 66, 98, 94, 59, 68, 30, 98, 57, 83, 75, 68, 85, 98, 76, 91, 23, 53, 42, 72, 77];
// let are = [8, 8, 14, 10, 3, 5, 14, 12];
// let are = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(cutTheSticks(are, []));