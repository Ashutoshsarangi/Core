console.log('Hello');

let promises = new Promise((a, b) => {
  // reject('some Reason to reject');
  b('resolve now');
});
promises.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log('errors', e);
});