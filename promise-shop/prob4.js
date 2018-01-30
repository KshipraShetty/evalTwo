require('es6-promise');

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);
module.exports = promise;
