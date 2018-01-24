const file = require('fs');

function newline(path) {
  // let buff = file.readFileSync(process.argv[2]);
  const buff = file.readFileSync(path);

  if (buff.length === 0) {
    return false;
  }
  const buffString = buff.toString();
  const str = buffString.split('\n');
  // console.log(str.length);
  // console.log(str.length-1);
  return str.length - 1;
}
module.exports = newline;
