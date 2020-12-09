// Sample Input 1

// 2
// hhaacckkekraraannk
// rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt
// Sample Output 1

// YES
// NO

// Code

const hackerrankInString = (s) => {
  let temp = 'hackerrank';
  let result = '';
  let i = 0;
  let index = s.indexOf(temp[i]);
  while (index >= 0) {
    result += temp[i];
    s = s.slice(index + 1);
    i = i + 1;
    index = s.indexOf(temp[i]);
    // console.log(s);
  }
  return temp === result ? 'YES' : 'NO';
}

console.log(hackerrankInString('hereiamstackerrank'));
// console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'));