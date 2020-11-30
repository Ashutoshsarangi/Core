// Sample Input

// 5
// 2 4 6 8 3
// Sample Output

// 2 4 6 8 8 
// 2 4 6 6 8 
// 2 4 4 6 8 
// 2 3 4 6 8 
// Code
const insertionSort1 = (n, arr) => {
  let val = arr[n - 1];
  const printArr = (a) => {
    console.log(arr.join(' '));
  }
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > val) {
      arr[i + 1] = arr[i];
      printArr(arr);
    } else {
      arr[i + 1] = val;
      printArr(arr);
      return;
    }
    if (i === 0) {
      arr[i] = val;
      printArr(arr);
    }
  }
}
console.log(insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))