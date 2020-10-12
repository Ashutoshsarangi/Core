// Sample Input 0

// 2 2
// 1 3 5
// 5 3 1
// 5 3 5
// 3 3 3
// Sample Output 0

// YES
// NO

// Code
const mixColors = (colors, queries) => {
  let result = [];
  let mixColors = [...colors];
  // Algorithm for the Mixing the Color.
  const colorMixture = (i, j) => {
    let temp = [0, 0, 0];
    for (let k = i; k <= j; k++) {
      temp[0] = Math.max(temp[0], colors[k][0]);
      temp[1] = Math.max(temp[1], colors[k][1]);
      temp[2] = Math.max(temp[2], colors[k][2]);
    }
    return temp;
  }
  // Push into the Main Array After get The Mixing Colors.
  for (let i = 0; i < colors.length - 1; i++) {
    const newMixture = colorMixture(0, i + 1);
    mixColors.push(newMixture);
  }
  // Logic For Matching the Queries.
  const matchColor = (item) => {
    let flag = false;
    for (let temp of mixColors) {
      flag = item.every((data, index) => (data === temp[index]));
      if (flag) {
        return 'YES';
      }
    }
    return 'NO';
  }
  for (let item of queries) {
    result.push(matchColor(item));
  }
  return result;
}

// console.log(mixColors(
//   [
//     [1, 1, 1],
//     [0, 0, 2],
//     [5, 0, 0],
//     [5, 2, 2]
//   ],
//   [
//     [0, 0, 2],
//     [5, 1, 2],
//     [5, 3, 2]
//   ]
// ));
console.log(mixColors(
  [
    [1, 3, 5],
    [5, 3, 1]
  ],
  [
    [5, 3, 5],
    [3, 3, 3]
  ]
));