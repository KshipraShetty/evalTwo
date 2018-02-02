const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8080 });

function handlerFunc(request, reply) {
  return reply('Hello hapi!');
}

server.route({ method: 'GET', path: '/', handler: handlerFunc });

module.exports = server;
