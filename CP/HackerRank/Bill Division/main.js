// Sample Input 0

// 4 1
// 3 10 2 9
// 12
// Sample Output 0

// 5

// code
const bonAppetit = (bill, k, b) => {
  let sum = 0;
  for (let index in bill) {
    if (index != k) {
      sum = sum + bill[index];
    }
  }
  let temp = b - (sum / 2);
  if (temp === 0) {
    console.log('Bon Appetit');
  } else {
    console.log(temp)
  }
}
bonAppetit([3, 10, 2, 9], 1, 12);