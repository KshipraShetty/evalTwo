const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080),
});


server.register(Inert, (err) => {
  if (err) { throw err; }
});

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{param}',
  handler: {
    directory: { path: path.join(__dirname, '/Public') },
  },

});
if (!module.parent) {
  server.start();
}

module.exports = server;
