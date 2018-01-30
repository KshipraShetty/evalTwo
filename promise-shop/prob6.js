const testCallBack = (callbackFn) => {
  const promise1 = Promise.resolve('fulfill');
  promise1.then((value) => {
    console.log(value);
  }).then(callbackFn);
};
const testCallBack1 = (callbackFn) => {
  const promise2 = Promise.reject(new Error('reject!'));
  promise2.catch((error) => {
    console.log(error.message);
    callbackFn();
  });
};


module.exports = { testCallBack, testCallBack1 };
