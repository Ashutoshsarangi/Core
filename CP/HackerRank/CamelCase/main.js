// Sample Input

// saveChangesInTheEditor
// Sample Output

// 5
// Code
const camelcase = (s) => {
  let result = 1;
  for (let char of s) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      result++;
    }
  }
  return result;
}
console.log(camelcase('saveChangesInTheEditor'));