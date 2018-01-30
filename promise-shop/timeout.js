const timeout = (callback) => {
  setTimeout(() => {
  //  console.log('TIMED OUT!');
    console.log(process.argv[0]);
    callback();
  }, 300);
};

module.exports = timeout;
// timeout();
