// Sample Input

// 2
// 4 3
// -1 -3 4 2
// 4 2
// 0 -1 2 1
// Sample Output

// YES
// NO

// Code

const angryProfessor = (k, a) => {
  let count = 0;
  for (let item of a) {
    if (item <= 0) {
      count++;
    }
  }
  if (count >= k) {
    return 'NO';
  } else {
    return 'YES';
  }

}

console.log(angryProfessor(3, [-1, -3, 4, 2, 0]))
