const file = require('./my-first-io');

describe('Test for differnt files', () => {
  test('empty file', () => {
    expect(file('test-file/zero.txt')).toBe(false);
  });
  test('file with 3 newlines', () => {
    expect(file('test-file/file1.txt')).toBe(3);
  });
  test('file with 4 newlines but no contents', () => {
    expect(file('test-file/file2.txt')).toBe(4);
  });
});
