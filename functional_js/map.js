function doubleAll(numArray) {
  return numArray.map(arrayNum => arrayNum * 2);
}

module.exports = doubleAll;
console.log('Should work for base case ', doubleAll([1, 2, 3, 4]).toString() === [2, 4, 6, 8].toString());
