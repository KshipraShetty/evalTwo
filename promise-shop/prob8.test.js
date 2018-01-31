const { attachTitle, promise } = require('./prob8');

describe('Chweck for values and promises', () => {
  it('should return DR. MANHATTAN', () => {
    expect(attachTitle('MANHATTAN')).toBe('DR. MANHATTAN');
  });
  it('should return DR. when empty string is passed', () => {
    expect(attachTitle('')).toBe('DR. ');
  });
  it('Check for fulfillment of poromise', async () => {
    await promise.then(attachTitle).then((output) => {
      expect(output).toBe('DR. MANHATTAN');
    });
  });
});
