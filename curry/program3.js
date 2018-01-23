const result = function out(a) {
  return function inn(b) {
    return a + b;
  };
};

module.exports = result;
