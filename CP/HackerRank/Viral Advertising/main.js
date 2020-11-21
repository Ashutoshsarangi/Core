// Sample Input

// 3
// Sample Output

// 9
// Code

const viralAdvertising = (n) => {
  let result = 0;
  let shared = 5;
  let like;
  for (let i = 1; i <= n; i++) {
    like = Math.floor(shared / 2);
    shared = like * 3
    result = result + like;
  }
  return result;
}

console.log(viralAdvertising(3));