const Server = require('./five');
const fs = require('fs');

describe('Check for route', () => {
  test('Check for statusCode', (done) => {
    Server.inject('/?name=Handling', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
