function doubleAll(numArray) {
  return numArray.map(arrayNum => arrayNum * 2);
}

module.exports = doubleAll;
console.log('Should work for base case ', doubleAll([1, 2, 3, 4]).toString() === [2, 4, 6, 8].toString());
console.log('Should work for negative numbers ', doubleAll([-1, -2, -3, -4]).toString() === [-2, -4, -6, -8].toString());
console.log('Should not work for empty array ', doubleAll([]).toString() === [].toString());
