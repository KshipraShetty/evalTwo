const Server = require('./four');
const fs = require('fs');

describe('Check for rout', () => {
  test('Check for contents', (done) => {
    Server.inject('/foo/bar/baz/file.html', (response) => {
      const fileContents = fs.readFileSync('/Users/kshiprasshetty/techuniversity/hapi work/four/Public/file.html');
      expect(response.result).toBe(fileContents.toString());
      // console.log(fileContents.toString());
      done();
    });
  });
  test('Check for status', (done) => {
    Server.inject('/foo/bar/baz/file.html', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
