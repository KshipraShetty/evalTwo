const alwaysThrows = require('./prob10.js');
// const iterate = require('./prob10.js').iterate;

global.console = {
  log: jest.fn(),
};

describe('Check for alwaysThrows function', () => {
  test('Check if error is thrown', () => {
    expect(alwaysThrows).toThrow();
  });
  test('Check if error thrown with a specific content', () => {
    expect(alwaysThrows).toThrow('OH NOES');
  });
});
