// Sample Input

// haveaniceday
// Sample Output 0

// hae and via ecy
// Code

const encryption = (s) => {
  let str = s.replace(/[' ']/g, '');
  let len = Math.sqrt(str.length);
  let col = Math.ceil(len);
  let row = Math.floor(len);
  let result = '';
  let temp = []
  for (let i = 1; i <= str.length; i++) {
    result = result + str[i - 1];
    if (i % col === 0) {
      temp.push(result);
      result = '';
    }
  }
  result ? temp.push(result) : temp;
  console.log(temp, row, col);
  result = '';
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < temp.length; j++) {
      result = result + (temp[j][i] ? temp[j][i] : '');
    }
    result = result + ' ';
  }

  return result;
}

// console.log(encryption('if man was meant to stay on the ground god would have given us roots'));
// console.log(encryption('haveaniceday'));
// console.log(encryption('feedthedog'));
console.log(encryption('chillout'));