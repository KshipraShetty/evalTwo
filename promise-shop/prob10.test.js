const { alwaysThrows, iterate, promise } = require('./prob10.js');
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


describe('Check for iterate', () => {
  test('Check if value is returned', () => {
    expect(iterate(1)).toBe(2);
  });
});

describe('Check for catch', () => {
  test('Check if catch gets executed', (done) => {
    const callbackFn = () => {
      expect(global.console.log).toHaveBeenCalledWith('OH NOES');
      done();
    };
    promise(callbackFn);
  });
});
