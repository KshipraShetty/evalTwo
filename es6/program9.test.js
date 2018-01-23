const fn = require('./program9');

test('The result should be Hi!!!!', () => {
  expect(fn('Hi', 4)).toBe('Hi!!!!');
});

test('Check for no second argument', () => {
  expect(fn('Hello')).toBe('Hello!!!!!');
});

test('Check for 0 !', () => {
  expect(fn('Hello', 0)).toBe('Hello');
});

test('Check for ! in 1st arg', () => {
  expect(fn('Hello!!')).toBe('Hello!!!!!!!!!');
});

test('Check for ! in 1st arg', () => {
  expect(fn('Hello!!', 5)).toBe('Hello!!!!!!!');
});
