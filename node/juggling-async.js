const http = require('http');
const bl = require('bl');

const results = [];
let count = 0;

function juggling(index) {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      results[index] = data.toString();
      count += 1;

      if (count === 3) {
        for (let i = 0; i < 3; i += 1) {
          console.log(results[i]);
        }
      } return true;
    }));
  });
}

for (let i = 0; i < 3; i += 1) {
  juggling(i);
}
