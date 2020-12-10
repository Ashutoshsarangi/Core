// Sample Input

// 6
// 1 4 3 5 6 2
// Sample Output

// 1 4 3 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 3 4 5 6 2 
// 1 2 3 4 5 6 

// Code

const insertionSort2 = (n, arr) => {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr.join(' '));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);