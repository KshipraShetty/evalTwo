const Hapi = require('hapi');
const Vision = require('vision');
const handlebars = require('handlebars');
const Path = require('path');
const helper = require('./helpers/helper.js');


const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});

server.register(Vision, (err) => {
  if (err) throw err;
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html',
  },
});

server.views({
  engines: {
    html: handlebars,
  },
  helpersPath: Path.join(__dirname, 'helpers'),
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
