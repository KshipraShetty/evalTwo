const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const handlebars = require('handlebars');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});

server.register(Vision, (err) => {
  if (err) throw err;
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});


server.views({
  engines: {
    html: handlebars,
  },
  path: Path.join(__dirname, 'templates'),
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

module.exports = server;
