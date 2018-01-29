const file = require('fs');
const path = require('path');
// let result = [];
function dir(pathname, ext, callback) {
  // const path = process.argv[2];
  // const ext = process.argv[3];
  file.readdir(pathname, 'utf8', (err, list) => {
    const result = list.filter(filename => path.extname(filename) === `.${ext}`);
    return callback(result);
  });
}

module.exports = dir;
// dir();
