const server = require('./one');

describe('Check for handler', () => {
  test('Check if it returns Hello hapi', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    process.argv[2] = 8000;
    server.inject(options, (res) => {
      expect(res.result).toBe('Hello hapi');
    });
    done();
  });
});
