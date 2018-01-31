const alwaysThrows = require('./prob10.js').alwaysThrows;
const iterate = require('./prob10.js').iterate;

global.console = {
  log: jest.fn(),
};

describe('Check for alwaysThrows function', () => {
  test('Check if error is thrown', () => {
    const callbackFn = () => {
      expect(console.log).toHaveBeenCalledWith('OH NOES');
    };
  });
});
