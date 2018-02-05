const https = require('https');

let result;
Promise((resolve, reject) => {
  https.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', (res) => {
    res.on('data', (data) => {
      result = JSON.parse(data);
      resolve('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/');
    });
  });
}).then((data) => {
  for (let i = 0; i < result.books.length; i += 1) {
    https.get(data + result.books[i].id, (resp) => {
      resp.on('data2', (data2) => {
        result.books[i].rating = JSON.parse(data2).rating;
      });
    });
  }
});
