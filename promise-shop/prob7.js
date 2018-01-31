// firstFun = first();
// secondFun = firstFun.then(value => second(value));
// secondFun.then(console.log);
const firstFn = () => {
  const firstPromise = new Promise((resolve, reject) => {
    resolve('Some secret');
  });
  return firstPromise;
};

const secondFn = (value) => {
  const secondPromise = new Promise((resolve, reject) => {
    resolve(value);
  });
  return secondPromise;
};

module.exports = { firstFn, secondFn };
