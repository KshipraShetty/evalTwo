const file = require('fs');

let count = 0;

function async() {
//  file.readFile(process.argv[2], 'utf8', (err, fileContents) => {
  file.readFile(process.argv[2], 'utf8', (err, fileContents) => {
    count = fileContents.split('\n').length;
    // callback();
    console.log(count - 1);
  });
}
/*
function lines() {
  console.log(count - 1);
  return count - 1;
}
async(lines); */
module.exports = async;
async();
