const fn = require('./program8');

test('the result should be 5', () => {
  expect(fn(4, 6)).toBe(5);
});

test('Check for no arguments', () => {
  expect(fn()).toBe(0.5);
});

test('Check for negative numbers', () => {
  expect(fn(-1, -3)).toBe(-2);
});

test('Check for 1 arg', () => {
  expect(fn(-3)).toBe(-1);
});

test('Check for 0', () => {
  expect(fn(0, 0)).toBe(0);
});
