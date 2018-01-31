// const attachTitle = arg => `DR. ${arg}`;
// const fulfilledPromise = new Promise(resolve => resolve('MANHATTAN'));
// module.exports = { attachTitle, fulfilledPromise };

// fulfilledPromise.then(attachTitle).then(console.log);
// // Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
function attachTitle(name) {
  return `DR. ${name}`;
}
const promise = new Promise((resolve, reject) => resolve('MANHATTAN'));
promise.then(attachTitle).then(console.log);

module.exports.promise = promise;
module.exports.attachTitle = attachTitle;
