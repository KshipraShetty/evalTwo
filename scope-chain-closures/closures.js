function foo() {
  let bar;
  quux = 4;
  function zip() {
    const quux = 2;
    bar = true;
  }
  return zip();
}
