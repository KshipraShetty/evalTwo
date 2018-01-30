const promise = require('./reject-a-promise');


describe('Check for promise rejection', () => {
  test('Check for a parameter passes to reject', (done) => {
    // console.log = jest.fn();
    promise.then(null, (message) => {
      expect(message).toBeInstanceOf(Error);
      done();
    });
  });
});
