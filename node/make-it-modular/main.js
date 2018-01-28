const mod = require('./mymodules');

const callback = function (err, list) {
  if (err) {
    throw err;
  } else {
    list.forEach((file) => {
      console.log(file);
    });
  }
};

const path = process.argv[2];
const ext = process.argv[3];
mod(path, ext, callback);
