// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Sample Input 0

// 9
// 10 5 20 20 4 5 2 25 1
// Sample Output 0

// 2 4
// Explanation 0

// The diagram below depicts the number of times Maria broke her best and worst records throughout the season

// Code

const breakingRecords = (scores) => {
  let result = [];
  let minFlag = 0;
  let min = scores[0];
  let max = scores[0];
  let maxFlag = 0;
  for (let score of scores) {
    if (min > score) {
      min = score;
      minFlag++;
    }
    if (max < score) {
      max = score;
      maxFlag++;
    }
  }
  result.push(maxFlag);
  result.push(minFlag);
  return result;
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));