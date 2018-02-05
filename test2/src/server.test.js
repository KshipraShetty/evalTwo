const server = require('./server');
const routes = require('../routes/users');

describe('Hapi server testing', () => {
  test('Check for number of routes', () => {
    expect(routes.length).toBe(server.table('localhost')[0].table.length);
  });
});
