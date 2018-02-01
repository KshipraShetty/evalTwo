const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(8080),

});
function handlerFunc(request, reply) {
  return reply(`Hello ${request.params.name}`);
}
server.route({
  method: 'GET', path: '/{name}', handler: handlerFunc,
});

// server.start((err) => {
//   if (err) throw err;
// });
module.exports = server;
