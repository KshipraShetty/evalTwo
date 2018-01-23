module.exports = (val, transform = val.length) => {
  if (typeof (transform) !== 'number') {
    return `${val}${'!'.repeat(val.length)}`;
  }
  return `${val}${'!'.repeat(transform)}`;
};
