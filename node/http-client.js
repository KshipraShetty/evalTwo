const http = require('http');

const fun = function httpfun() {
  const url = process.argv[2];
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      console.log(data);
    //  }
    // );
    });
  });
};

module.exports = fun;
fun();
