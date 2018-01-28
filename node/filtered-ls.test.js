const filterls = require('./filtered-ls');

describe('Check for inputs', () => {
  const path = 'test-file';
  const ext = 'txt';
  const answer = ['file1.txt', 'file2.txt', 'zero.txt'];
  test('Check for directory with all .txt file', () => {
    expect(filterls('test-file', ext)).toBe(answer);
  });
});
