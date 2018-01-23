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
