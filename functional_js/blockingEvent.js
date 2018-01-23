function repeat(operation, num) {
  // modify this so it can be interrupted

  if (num <= 0) {
    return;
  }
  // setImmidiate(operation);
  operation();
  setTimeout(operation, 100);

  repeat(operation, num -= 1);
}


function operation() {
  console.log('hello ');
}
repeat(operation, 100);

module.exports = repeat;
