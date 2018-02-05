const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
  handler: (request, response) => {
    Models.User.findAll().then((result => result.map(row => ({
      idno: row.idno,
      author: row.author,
      name: row.name,
    }))))
      .then((books) => {
        response({
          data: books,
          statusCode: 200,
        });
      })
      .catch((error) => {
        response({
          data: `${error}`,
          statusCode: 500,
        });
      });
  },
}];
