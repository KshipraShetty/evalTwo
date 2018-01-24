const async = require('./async-io');

describe('Test for differnt files', () => {
  test('empty file', () => {
    expect(async('test-file/zero.txt')).toBe(false);
  });
  test('file with 3 newlines', () => {
    expect(async('test-file/file1.txt')).toBe(3);
  });
  test('file with 4 newlines but no contents', () => {
    expect(async('test-file/file2.txt')).toBe(4);
  });
});
