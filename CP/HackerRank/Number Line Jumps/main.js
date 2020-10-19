// ou are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// Simple Formula
// x1+ yv1 = x2+yv2

const kangaroo = (x1, v1, x2, v2) => {
  let result = '';
  if (v1 <= v2) {
    result = 'NO';
  } else {
    if ((x2 - x1) % (v1 - v2) === 0) {
      result = 'YES';
    } else {
      result = 'NO';
    }
  }
  return result;
}
console.log(kangaroo(0, 3, 4, 2));


