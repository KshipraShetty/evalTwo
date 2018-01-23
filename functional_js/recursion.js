function reduce(inputWords, countFunction, initial) {
  if (inputWords.length > 0) {
    const eleOne = inputWords[0];
    return reduce(inputWords.slice(1), countFunction, countFunction(eleOne, initial));
  }

  return initial;
}
function countFunction(eleOne, initial) {
  return eleOne + initial;
}

module.exports = reduce;

// base case
const inputWords = [1, 2, 3];
const initial = 0;

console.log('The base case is: ', reduce(inputWords, countFunction, initial) === 6);

// empty case
/* inputWords = []
initial = 0
console.log('The empty array case is: ', reduce(inputWords, countFunction, initial)===0);

inputWords = [1,2,3,4]
initial = -5;
console.log('The negative initial case is: ', reduce(inputWords, countFunction, initial)===5);

inputWords = [-1,-2,-3,-4]
initial = 0
console.log('The negative array case is: ', reduce(inputWords, countFunction, initial)===-10);
*/
