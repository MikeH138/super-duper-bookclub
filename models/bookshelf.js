const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    genre: {
      type: DataTypes.TEXT,
    },
  });

Bookshelf.associate = (models) => {
  // Associating the "bookshelf" with Users
  // Each user of the website will be able to use a search bar, to find a book that is found in the bookshelf table
  Bookshelf.hasMany(models.User);
};

  return Bookshelf;
};