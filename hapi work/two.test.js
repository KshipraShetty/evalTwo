const Server = require('./two');

describe('Check for rout', () => {
  test('Check for normal path', (done) => {
    Server.inject('/KSHIPRA', (response) => {
      expect(response.result).toBe('Hello KSHIPRA');
      done();
    });
  });

  test('Check for empty path', (done) => {
    Server.inject('/', (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('Check for bad request', (done) => {
    Server.inject('sss', (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
});
