// const fn = require('./program4');
/*
describe('Check for inputs', () => {
  test('Check for empty args', () => {
    expect(fn()).toBe(0);
  });
  test('Check for single insocation', () => {
    expect(fn(1)()).toBe(1);
  });
  test('Check for multiple invocations', () => {
    expect(fn(1)(2)(3)()).toBe(6);
  });
  test('Check with negative inputs', () => {
    expect(fn(-1)(-2)(3)()).toBe(0);
  });
});
*/

const fn = require('./program4');

describe('test for return type', () => {
  test('return type is a function if there is arg', () => {
    typeof fn(4) === 'function';
  });
  test('return type should be a number if no args', () => {
    typeof fn() === 'number';
  });
});

describe('Check for output', () => {
  fn(1);
  fn(2);
  fn(3);
  test('Check with normal inputs', () => {
    expect(fn()).toBe(6);
  });

  fn(-1);
  fn(-2);
  fn(-3);
  test('Check with negative numbers', () => {
    expect(fn()).toBe(-6);
  });
  fn(0);
  test('Check with normal input', () => {
    expect(fn()).toBe(0);
  });
});
