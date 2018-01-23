const fn = require('./program6');

test('The answer should be 1', () => {
  expect(fn([2, 3, 4, 1, 6])).toBe(1);
});

test('Check for empty array', () => {
  expect(fn([])).toBe(0);
});

test('With negative numbers', () => {
  expect(fn([-1, -2, 3, 4, 5, 6])).toBe(-2);
});

test('spread should return a number', () => {
  expect(typeof fn([0, 1, 2, 3])).toBe('number');
});
