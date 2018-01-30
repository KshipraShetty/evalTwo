const testPromise1 = require('./prob6.js').testCallBack;
const testPromise2 = require('./prob6.js').testCallBack1;

global.console = {
  log: jest.fn(),
};

describe('should pass for async function', () => {
  test('should return fulfill', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('fulfill');
      done();
    };
    testPromise1(callbackFn);
  });
  test('should return fulfill', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('reject!');
      done();
    };
    testPromise2(callbackFn);
  });
});
