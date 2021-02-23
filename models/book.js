<<<<<<< HEAD
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Bookshelf', {
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

Book.associate = (models) => {
  // Associating the "bookshelf" with Users
  // Each user of the website will be able to use a search bar, to find a book that is found in the bookshelf table
  Book.hasMany(models.User);
};

  return Book;
};
=======
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
const Book = sequelize.define("bookshelf", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
});

const book1 = Book.create({
  title: "Jane",
  author: "Doe",
  genre: "mystery",
});
console.log("Jane's auto-generated ID:", sequelize.models.modelName);

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
>>>>>>> 4b5b1c495690d1aab42de98dfa01ebca0fb1857c
