const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8085,
});


server.register(Inert, (err) => {
  if (err) { throw err; }
});
server.route({
  method: 'GET',
  path: '/{name}',
  handler: (req, res) => {
    res.file(path.join(__dirname, req.params.name));
  },
});
if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
