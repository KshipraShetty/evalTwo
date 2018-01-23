let counter = 0;


function repeat(operation, num) {
  if (num < 0) {
    return false;
  } else if (num === 0) {
    return counter;
  }
  operation();
  return repeat(operation, --num);
}

function operation() {
  counter += 1;
}

module.exports = repeat;
counter = 0;

console.log('Check for base case', repeat(operation, 0) === 0);
console.log('Check for positive number case', repeat(operation, 5) === 5);
console.log('Check for -ve numbers', repeat(operation, -1) === false);
