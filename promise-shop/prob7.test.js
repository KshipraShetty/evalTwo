const { firstFn, secondFn } = require('./prob7');

describe('Test for checking the value returned by the promises', () => {
  test('Verify Some secret is returned on resolve by the promise in firstFn.then()', () => {
    expect.assertions(1);
    return expect(firstFn().then(secondFn)).resolves.toBe('Some secret');
  });
  test('Verify Som secret is returned on resolve by the promise in secondFn', () => {
    expect.assertions(1);
    return expect(secondFn('Hello World')).resolves.toBe('Hello World');
  });
  test('Verify Some secret is returned on resolve by the promise in firstFn', () => {
    expect.assertions(1);
    return expect(firstFn()).resolves.toBe('Some secret');
  });
});
