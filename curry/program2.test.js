const fn = require('./program2');

describe('Testing for binary num args', () => {
  test('Both positive numbers', () => {
    expect(fn(1, 2)).toBe(3);
  });
  test('Both negative numbers', () => {
    expect(fn(-1, -2)).toBe(-3);
  });
  test('One negative and a positive number', () => {
    expect(fn(-3, 3)).toBe(0);
  });
  test('Both zeros', () => {
    expect(fn(0, 0)).toBe(0);
  });
});
