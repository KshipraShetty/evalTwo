const Server = require('./two');

describe('ping controller', () => {
  test('responds with success for ping', (done) => {
    Server.inject('/KSHIPRA', (response) => {
      expect(response.result).toBe('Hello KSHIPRA');
      done();
    });
  });
});
