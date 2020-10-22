// Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

// Code

const timeConversion = (s) => {
  let result = '';
  let flag = s.slice(-2);
  let hr = s.slice(0, 2);
  if (flag === 'AM') {
    if (hr === '12') {
      result = s.replace(s.slice(0, 2), '00');
    } else {
      result = s;
    }
  } else if (flag === 'PM') {
    if (parseInt(hr) < 12) {
      result = s.replace(s.slice(0, 2), (parseInt(hr) + 12));
    } else {
      result = s;
    }
  }
  return result.replace(s.slice(-2), '');
}
console.log(timeConversion("06:40:03AM"));