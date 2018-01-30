const promise = require('./prob5');

global.console = {
  log: jest.fn(),
};

describe('test to check if promise is asynchronous', () => {
  test('verify the string printed', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('worldhello');
      done();
    };

    promise(callbackFn);
  });
});
