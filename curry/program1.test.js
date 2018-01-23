const fn = require('./program1');

describe('Testing if arg is passed and recieved', () => {
  test('test1 with a string', () => {
    expect(fn('a')).toEqual('a');
  });
  test('test2 with an array', () => {
    expect(fn([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
