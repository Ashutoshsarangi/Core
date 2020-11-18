
// Sample Input 
// 25
// Sample OutPut
// 15511210043330985984000000

// Code

function extraLongFactorials(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = BigInt(result) * BigInt(i);
  }
  return (result.toString());
}
console.log(extraLongFactorials(25));