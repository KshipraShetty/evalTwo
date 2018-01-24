const sum = require('./baby-step');

describe('Test for different input', () => {
  test('no input ', () => expect(sum()).toBe(false));
  test('normal array ', () => expect(sum([1, 2, 3])).toBe(6));
  test('negative input array', () => expect(sum([-1, 2, 3, -4])).toBe(0));
  test('0 as input array elements', () => expect(sum([0, 0, 0, 0])).toBe(0));
});
