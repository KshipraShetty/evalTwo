const filters = require('./filtered-ls');

describe('Check for files in a directory', () => {
  test('Check for all files with the specified extention', (done) => {
    const path = './test-file';
    const ext = 'txt';
    const answer = ['file1.txt', 'file2.txt', 'zero.txt'];
    const callback = (data) => {
      expect(data).toEqual(answer);
      done();
    };
    filters(path, ext, callback);
  });
  test('Check for directory not containing the required type of file', (done) => {
    const path = './test-file';
    const ext = 'json';
    const answer = [];
    const callback = (data) => {
      expect(data).toEqual(answer);
      done();
    };
    filters(path, ext, callback);
  });
  test('Check for directory containing mixed exts', (done) => {
    const path = './test-file1';
    const ext = 'txt';
    const answer = ['file1.txt'];
    const callback = (data) => {
      expect(data).toEqual(answer);
      done();
    };
    filters(path, ext, callback);
  });
});
