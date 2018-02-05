function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(value) {
  // console.log(value);
  return value + 1;
}


const promise = (callbackFn) => {
  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => {
      console.log(error.message);
      callbackFn();
    });
};

module.exports = { alwaysThrows, iterate, promise };
