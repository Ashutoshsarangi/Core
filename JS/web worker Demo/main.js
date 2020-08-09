// n = 1000000;
// for (var i = 0; i < n; i++) {
//   if (i == n - 1) {
//     console.log('For Loop Completed');
//   }
// }

// console.log('Out of For LOop I can do next set Of Work, main Thread Is free');

// This above code is expected scenario before web workers.

const myWorker = new Worker('worker.js');
// Send message to worker
myWorker.postMessage('test');

// Receive message from worker
// myWorker.onmessage = function (e) {
//   console.log(e.data);
// }

console.log('Out of For LOop I can do next set Of Work, main Thread Is free');
