function average(...args) {
  // let result = 0;
  const result = args[0].reduce((result, value) => {
    result += value;
    return result;
  }, 0);
  if (args[0].length !== 0) {
    return result / args[0].length;
  }

  return false;
}
module.exports = average;
