const Hapi = require('hapi');
const routes = require('../routes/users');

const server = new Hapi.Server();
const port = 8082;
server.connection({
  host: 'localhost',
  port,
});

server.route(routes);
if (!module.parent) {
  server.start()
    .then(() => {
      console.log('Server started');
    })
    .catch((error) => { throw error; });
}

module.exports = server;
