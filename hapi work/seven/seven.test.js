const Server = require('./seven');
const helper = require('./helpers/helper');

describe('Check for route', () => {
  test('Check for statusCode', (done) => {
    Server.inject('/?name=Hello&suffix=123', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check for contents', (done) => {
    Server.inject('/?name=all&suffix=welcome', (response) => {
      expect(response.result).toMatch('<html>\n    <head><title>Hello</title></head>\n    <body>\n        Hello\n    </body>\n</html>');
      done();
    });
  });
});
