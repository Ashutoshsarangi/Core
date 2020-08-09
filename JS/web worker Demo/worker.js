/* worker.js */
n = 10000000000;

// Receive message from main file
self.onmessage = function (e) {
  for (var i = 0; i < n; i++) {
    if (i == n - 1) {
      console.log('For Loop Completed');
    }
  }
}
// Send message to main file
var workerResult = "Ashu";
self.postMessage(workerResult);