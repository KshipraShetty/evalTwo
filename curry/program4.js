let total = 0;

const result = function out(a) {
  if (a !== undefined) {
    total = a + total;
    return result;
  }
  return total;
};

module.exports = result;
