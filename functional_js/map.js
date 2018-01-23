function doubleAll(numArray) {
  if (typeof numArray === typeof []) {
    return numArray.map(arrayNum => arrayNum * 2);
  }
  return false;
}

module.exports = doubleAll;
console.log('Should work for base case ', doubleAll([1, 2, 3, 4]).toString() === [2, 4, 6, 8].toString());
console.log('Should work for negative numbers ', doubleAll([-1, -2, -3, -4]).toString() === [-2, -4, -6, -8].toString());
console.log('Should not work for empty array ', doubleAll([]).toString() === [].toString());
console.log('Check for non array elememnts', doubleAll('dfdc') === false);
