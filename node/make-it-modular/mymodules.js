const file = require('fs');


module.exports = function mymodules(path, ext, callback) {
  return file.readdir(path, (error, data) => {
    if (error) {
      return callback(error);
    } return callback(null, data.filter((files) => {
      const fileext = files.split('.');
      if (fileext[1] === ext) {
        return files;
      } return false;
    }));
  });
};
