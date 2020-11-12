// Sample Input 0

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
// Sample Output 0

// 9

// Code

const designerPdfViewer = (h, word) => {
  let max = -999999;
  for (let item of word) {
    let index = item.charCodeAt() - 97;
    if (max < h[index]) {
      max = h[index];
    }
  }
  return max * word.length;
}
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
