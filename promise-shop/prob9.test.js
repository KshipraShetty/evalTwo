const parsePromised = require('./prob9');

global.console = {
  log: jest.fn(),
};

describe('Check for try and catch', () => {
  test('Check for Wrong JASON parse', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('accepted');
      done();
    };
  });
  parsePromised(callbackFn, JSON.stringify({ message: 'Hello' }));
});
