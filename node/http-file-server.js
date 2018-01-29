const http = require('http');
const fs = require('fs');

function httpFileServer() {
  http.createServer((req, res) => {
    const fileStream = fs.createReadStream(process.argv[3]);
    fileStream.pipe(res);
  }).listen(process.argv[2]);
}

httpFileServer();
module.exports = httpFileServer;
