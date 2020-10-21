// Staircase detail

// This is a staircase of size n: 4

//    #
//   ##
//  ###
// ####

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Code

const staircase = (n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      result = result + ' ';
    }
    for (let k = 0; k < i + 1; k++) {
      result = result + '#'
    }
    result = result + '\n';
  }
  console.log(result);
};

staircase(6);