const promise = require('./fulfill-a-promise');


describe('Check for promise fulfill', () => {
  test('Check for a parameter passes to fulfill', (done) => {
    console.log = jest.fn();
    promise.then((message) => {
      expect(message).toBe('FULFILLED!');
      done();
    });
  });
});
