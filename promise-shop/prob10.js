function alwaysThrows() {
  throw new Error('OH NOES');
}

function iterate(value) {
  return value + 1;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate);


module.exports = { alwaysThrows, iterate };
