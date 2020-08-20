console.log('Hello');

// Conclusion:-
/**
 * Note:-
 * Async await Blocks the Thead.
 */


let promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am resolved');
  }, 10000);
  console.log('2232323232');
});

let testFun = function (name) {
  this.name = name;
  this.testPromises = () => {
    console.log('1', this.name);
    promises.then((data) => {
      console.log('2');
      console.log(data);
    });
    console.log('3');
  }
  this.testAsyncAwait = async () => {
    console.log('1', this.name);
    let data = await promises;
    console.log(data);
    console.log('3');
  }
}

let t = new testFun('As');
// t.testPromises();
// console.log('Helllllllo');
t.testAsyncAwait();