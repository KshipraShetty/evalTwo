const http = require('http');

function httpCollect() {
  const url = process.argv[2];
  let list = '';
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      list += data.toString();
      // console.log(list);
    });
    response.on('end', () => {
      console.log(list.length);
      console.log(list);
    });
  });
}

httpCollect();
module.exports = httpCollect;
