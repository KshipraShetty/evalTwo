
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    author: DataTypes.STRING,
    idno: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return books;
};
