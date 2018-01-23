const prog3 = require('./program3');

test('The result should be [hello,world] becomes "hw"', () => {
  expect(prog3(['hello', 'world'])).toBe('[hello,world] becomes "hw"');
});

test(' Check for empty array', () => {
  expect(prog3([])).toBe('[] becomes ""');
});

test('Check for bigger array', () => {
  expect(prog3(['Abc', 'Bcd', 'Efg', 'Hij'])).toBe('[Abc,Bcd,Efg,Hij] becomes "ABEH"');
});
