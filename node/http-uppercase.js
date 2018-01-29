const http = require('http');
const map = require('through2-map');

const httpUppercase = () => {
  http.createServer((req, res) => {
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  }).listen(process.argv[2]);
};

httpUppercase();
module.export = httpUppercase;
