const Server = require('./three');
const fs = require('fs');

describe('Check for rout', () => {
  test('Check for content', (done) => {
    Server.inject('/index.html', (response) => {
      const fileContents = fs.readFileSync('index.html');
      expect(response.result).toBe(fileContents.toString());
      // console.log(fileContents.toString());
      done();
    });
  });
  test('Check for status', (done) => {
    Server.inject('/index.html', (response) => {
      // const fileContents = fs.readFileSync('index.html');
      expect(response.statusCode).toBe(200);
      // console.log(fileContents.toString());
      done();
    });
  });
});
