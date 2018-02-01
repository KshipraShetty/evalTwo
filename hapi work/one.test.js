const Server = require('./one');

describe('ping controller', () => {
  test('responds with success for ping', (done) => {
    Server.inject('/', (response) => {
      expect(response.result).toBe('Hello hapi!');
      done();
    });
  });
});
