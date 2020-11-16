// Sample Input 0

// 6
// 2
// Sample Output 0

// 1

// Code
const pageCount = (n, p) => {
  let ind = 0
  if (p % 2 == 0) {
    ind = p / 2;
  } else {
    ind = (p - 1) / 2;
  }
  if (ind > Math.floor(n / 4)) {
    return (Math.floor(n / 2) - ind);
  }
  return ind;
}
console.log(pageCount(9, 4));