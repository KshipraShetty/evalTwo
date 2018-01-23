const a = require('./program1');

test('The output is HELLO ES6', () => {
  expect(a()).toBe('HELLO ES6');
});
