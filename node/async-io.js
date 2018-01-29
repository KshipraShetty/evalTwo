const file = require('fs');

let count = 0;

function async(path, callback) {
//  file.readFile(process.argv[2], 'utf8', (err, fileContents) => {
  file.readFile(path, 'utf8', (err, fileContents) => {
    count = fileContents.split('\n').length;
    // callback();
    // console.log(count - 1);
    return callback(count - 1);
  });
}


module.exports = async;
// async();
