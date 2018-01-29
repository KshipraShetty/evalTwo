const async = require('./async-io');

describe('Tests for checking  newline characters', () => {
  test('empty file', (done) => {
    const callback = (data) => {
      expect(data).toBe(0);
      done();
    };
    async('test-file/zero.txt', callback);
  });
  test('file with 3 newlines', (done) => {
    const callback = (data) => {
      expect(data).toBe(3);
      done();
    };
    async('test-file/file1.txt', callback);
  });
  test('file with 4 newlines but no contents', (done) => {
    const callback = (data) => {
      expect(data).toBe(4);
      done();
    };
    async('test-file/file2.txt', callback);
  });
});
