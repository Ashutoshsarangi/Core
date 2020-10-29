// Sample Input 0

// 2017
// Sample Output 0

// 13.09.2017
// Code
const dayOfProgrammer = (year) => {
  let dd;
  if (year === '1918') {
    dd = 26;
  } else if ((year <= 1917) & (year % 4 === 0) || (year > 1918) && (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    dd = 12;
  } else {
    dd = 13;
  }
  return `${dd}.09.${year}`;
}

console.log(dayOfProgrammer(2017));