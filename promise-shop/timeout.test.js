const timeout = require('./timeout.js');

global.console = {
  log: jest.fn(),
};

describe('Check settimeout function:', () => {
  process.argv = [];

  test('Check for no inputs', (done) => {
    const callback = () => {
      expect(global.console.log).toHaveBeenCalledWith(undefined);
      done();
    };
    timeout(callback);
  });

  test('Check with inputs', (done) => {
    const callback = () => {
      expect(global.console.log).toHaveBeenCalledWith('TIMED OUT!');
      done();
    };
    process.argv = ['TIMED OUT!'];
    timeout(callback);
  });
});
