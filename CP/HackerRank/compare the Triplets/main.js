// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.
// Sample Input 0

// 5 6 7
// 3 6 10
// Sample Output 0

// 1 1

// Sample Input 1

// 17 28 30
// 99 16 8
// Sample Output 1

// 2 1

// Code

const deepComparison = (aliceArr, bobArr) => {
  let result = [0, 0]; // 1st Element for Alice and then BOB.
  for (let i = 0; i < aliceArr.length; i++) {
    if (aliceArr[i] > bobArr[i]) {
      result[0] = result[0] + 1;
    }
    else if (aliceArr[i] < bobArr[i]) {
      result[1] = result[1] + 1;
    }
  }
  return result;
}

// console.log(deepComparison([5, 6, 7], [3, 6, 10]));
console.log(deepComparison([17, 28, 30], [99, 16, 8]));