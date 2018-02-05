const Server = require('./five');
const fs = require('fs');

describe('Check for route', () => {
  test('Check for statusCode', (done) => {
    Server.inject('/?name=the handling', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check for contents', (done) => {
    Server.inject('/?name=the handling', (response) => {
      expect(response.result).toMatch('Hello the handling');
      done();
    });
  });
});
