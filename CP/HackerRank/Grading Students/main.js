// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33
// Explanation 0


// Student  received a , and the next multiple of  from  is . Since , the student's grade is rounded to .
// Student  received a , and the next multiple of  from  is . Since , the grade will not be modified and the student's final grade is .
// Student  received a , and the next multiple of  from  is . Since , the student's grade will be rounded to .
// Student  received a grade below , so the grade will not be modified and the student's final grade is .

// Code

const gradingStudents = (grades) => {
  let result = [];
  for (let grade of grades) {
    if (grade <= 38) {
      result.push(grade);
    } else {
      let temp = grade % 5;
      let minRemaining = 5 - temp;
      if (minRemaining >= 3) {
        result.push(grade);
      } else {
        result.push(grade + minRemaining);
      }
    }
  }
  return result;
}

console.log(gradingStudents([86, 30, 0, 16, 51, 55, 42, 50, 22, 70, 12, 27, 34, 24, 95, 16, 32, 22, 52, 56, 71, 95]));
// console.log(gradingStudents([73, 67, 38, 33, 1, 9]));