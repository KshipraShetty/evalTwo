const fun = require('./program2');

test('The answer should be Hello Dominic!Your name lowercased is "domenic".', () => {
  expect(fun('Domenic')).toBe(`Hello, Domenic!
 Your name lowercased is "domenic".`);
});

test('The answer should be Hello!Your name lowercased is.', () => {
  expect(fun()).toBe(`Hello, !
  Your name lowercased is.`);
});

test('Check for all lowercase', () => {
  expect(fun('domenic')).toBe(`Hello, domenic!
 Your name lowercased is "domenic".`);
});
