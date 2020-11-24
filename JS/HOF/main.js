/**
 * @description This is an HOF Example Simple one
 * 
 */

// Code
let greeting = 'Hi!!!!!'
const fun = (args, greeting) => {
  console.log(args[0]);
}
const doSomeMagic = (fn, greeting) => {
  return function () {
    let args = arguments;
    fn(args, greeting);
  }
}

const betterFun = doSomeMagic(fun, greeting);

betterFun('Ashu');
