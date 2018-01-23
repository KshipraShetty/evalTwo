const fn = require('./program5');

test("The expected value is { username: 'Kshipra', email: 'abc@doe.com' }", () => {
  expect(fn(['blah', 'Kshipra', 'abc@doe.com', '21', 'kshipra', 'shetty'])).toEqual({ username: 'Kshipra', email: 'abc@doe.com' });
});

test('Check for empty array', () => {
  expect(fn([])).toEqual({});
});

test('Check for inadequate data', () => {
  expect(fn(['blah', 'Kshipra'])).toEqual({});
});

test('Check for inadequate data', () => {
  expect(fn(['blah'])).toEqual({});
});
