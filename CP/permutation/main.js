/**
 * @description Here I am using Heap Algorithm to find the Permutations of a 
 * Set of number / string.
 * The Number Of Permutation = N!
 */
// Algo
// procedure generate(k : integer, A : array of any):
//     if k = 1 then
//         output(A)
//     else
//         // Generate permutations with kth unaltered
//         // Initially k == length(A)
//         generate(k - 1, A)

//         // Generate permutations for kth swapped with each k-1 initial
//         for i := 0; i < k-1; i += 1 do
//             // Swap choice dependent on parity of k (even or odd)
//             if k is even then
//                 swap(A[i], A[k-1]) // zero-indexed, the kth is at k-1
//             else
//                 swap(A[0], A[k-1])
//             end if
//             generate(k - 1, A)

//         end for
//     end if

// Code 
const getPermutation = (arr) => {
  let output = [];
  // Swap In the Array
  const swapInPlace = (arrToSwap, pos1, pos2) => {
    const temp = arrToSwap[pos1];
    arrToSwap[pos1] = arrToSwap[pos2];
    arrToSwap[pos2] = temp;
  }
  // Main generator Function
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }
    generate(n - 1, heapArr);
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      }
      else {
        swapInPlace(heapArr, 0, n - 1)
      }
      generate(n - 1, heapArr);
    }
  }
  generate(arr.length, arr.slice());
  return output;

};

const result = getPermutation([1, 2, 3, 4]);
console.log('hey', result, result.length);