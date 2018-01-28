const file = require('fs');

function dir() {
  const path = process.argv[2];
  const ext = process.argv[3];
  file.readdir(path, (err, list) => {
    list.filter((files) => {
      const fileext = files.split('.');
      if (ext === fileext[1]) {
        console.log(files);
      } return false;
    });
  });
}

module.exports = dir;
dir();
