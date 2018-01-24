// const numbers = process.argv.slice(2);


function sum(numbers) {
  if (numbers === undefined) {
    return false;
  }
  const number = numbers.map(Number);
  const output = number.reduce((result, element) => { result += element; // eslint-disable-line
    return result;
  }, 0);
  console.log(output);
  return output;
}

module.exports = sum;
// sum()
