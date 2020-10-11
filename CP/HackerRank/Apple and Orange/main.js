// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
// Sample Input 0

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
// Sample Output 0

// 1
// 1

// Code
// Always We should Perform As Like Pure Function.
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let appleCounter = 0;
  let orangeCounter = 0;
  // Apple Counter
  for (let apple of apples) {
    let tempRange = apple + a;
    if (tempRange >= s && tempRange <= t) {
      appleCounter++;
    }
  }
  // Orange Counter
  for (let orange of oranges) {
    let tempRange = orange + b;
    if (tempRange >= s && tempRange <= t) {
      orangeCounter++;
    }
  }
  console.log(appleCounter)
  console.log(orangeCounter);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);