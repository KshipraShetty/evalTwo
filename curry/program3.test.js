const fn = require('./program3');

describe('Check for delay invocation', () => {
  test('Both positive numbers', () => {
    expect(fn(1)(2)).toBe(3);
  });
  test('Both negative numbers', () => {
    expect(fn(-1)(-2)).toBe(-3);
  });
  test('One negative and a positive number', () => {
    expect(fn(-3)(3)).toBe(0);
  });
  test('Both zeros', () => {
    expect(fn(0)(0)).toBe(0);
  });
  test('two strings', () => {
    expect(fn('hell')('o')).toBe('hello');
  });
});
