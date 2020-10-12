// Sample Input 0

// 0011
// Sample Output 0

// 2

// Code
const maximumPower = (s) => {
  let result = 1;
  let collectArr = [];
  let k = s.length - 1;
  const makeCircularString = (str, i) => {
    if (i < 0) {
      return;
    }
    let temp = str[str.length - 1] + str.slice(0, str.length - 1);
    i--;
    collectArr.push(parseInt(temp, 2));
    makeCircularString(temp, i);
  }
  makeCircularString(s, k)

  //Calculate the MAX power
  const getPower = (item) => {
    let powerCount = 0;
    while (item % 2 === 0) {
      if (item % 2 === 0) {
        powerCount++;
      } else {
        break;
      }
      item = item / 2;
    }
    return powerCount;
  }
  // Check For maximum Power 
  const checkMaxPower = () => {
    let maxPower = 0;
    let newArr = [];
    for (let item of collectArr) {
      if (item % 2 !== 0) {
        newArr.push(0);
      } else {
        const x = getPower(item);
        newArr.push(x);
      }
    }
    return Math.max(...newArr);
  }
  result = checkMaxPower();

  return result;
}

// console.log(maximumPower('0011'));
// console.log(maximumPower('1011010'));
console.log(maximumPower('111'));