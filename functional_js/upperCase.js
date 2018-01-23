function upperCase(input) {
  if (typeof input === 'string') {
    return input.toUpperCase();
  }
  return false;
}

module.exports = upperCase;

// tdd
console.log('Check for empty string', upperCase('') === '');
