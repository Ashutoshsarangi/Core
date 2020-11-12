// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4

// Code
const alternatingCharacters = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      result++;
    }
  }
  return result;
}
console.log(alternatingCharacters('AABAAB'));