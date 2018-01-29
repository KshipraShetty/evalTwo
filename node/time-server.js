const net = require('net');
// const date = require('date');

function zero(data) {
  if (data < 10) {
    return `0${data}`;
  }

  return `${data}`;
}
function timeserver() {
  net.createServer((socket) => {
    const date = new Date();
    let data = `${date.getFullYear().toString()}-`;
    data += zero(`${date.getMonth() + 1}`); // starts at 0
    data += `-${date.getDate()} `; // returns the day of month
    data += zero(`${date.getHours()}`);
    data += `:${date.getMinutes()}`;
    data += '\n';
    socket.write(data);
    socket.end();
  }).listen(process.argv[2]);
}

timeserver();
module.exports = timeserver;
