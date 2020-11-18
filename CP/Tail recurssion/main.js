/**
 * @description This Following Function is a Example of Tail Recursion 
 */
const fact = (n, val) => {
  if (n === 1) {
    return val;
  }
  return fact(n - 1, val * (n - 1));
  // return val;
}

console.log(fact(5, 5));