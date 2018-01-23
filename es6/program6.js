function minimum(numbers) {
  if (numbers.length !== 0) { return Math.min(...numbers); }
  return 0;
}
module.exports = minimum;

// let numbers = process.argv.slice(2)
// console.log('The minimum of '+'['+numbers+']'+ ' is ' +Math.min(...numbers));
