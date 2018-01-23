const fn = require('./program4');

test('the result should be ouch', () => {
  expect(console.log(fn.kick('ouch'))).toBe('ouch');
});
