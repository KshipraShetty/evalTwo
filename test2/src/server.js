const Hapi = require('hapi');


const server = new Hapi.Server();
const port = 8082;
server.connection({
  host: 'localhost',
  port,
});


if (!module.parent) {
  server.start()
    .then(() => {
      console.log('Server started');
    })
    .catch((error) => { throw error; });
}

module.exports = server;
