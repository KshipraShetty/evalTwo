const hello = require('./hello');

describe('Check for input', () => {
  test('Normal string input', () => {
    expect(hello('HELLO WORLD')).toBe('HELLO WORLD');
  });
});
