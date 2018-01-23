const fn = require('./program7');

test('the answer should be 2', () => {
  expect(fn([1, 2, 3])).toBe(2);
});

test('Check for empty array', () => {
  expect(fn([])).toBe(false);
});

test('Check for negative numbers', () => {
  expect(fn([-1, -2, -3, 4])).toBe(-0.5);
});

test('Check for 0', () => {
  expect(fn([0])).toBe(0);
});

test('should give average of floating', () => {
  expect(fn([2.2, 4.8])).toBe(3.5);
});
