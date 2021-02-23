/* 
custom api for favoring books and trashing books
 will add books from recommendations and from permanent books... from our database

// hard-code bookshelf values so can display covers

// api route based on genre
// ex. api/books/genre/:{{genre}}

*/

const db = require("../models");
module.exports = (app) => {
  // Create all our api routes and set up logic within those routes where required.
  app.get("/", async (req, res) => {
    // res.sendFile(path.join(__dirname, "/views/index.handlebars"))

    //this is sequelize
    const data = await db.book.find();

    res.render("favorites", data);
  });

  app.post("/api/books", async (req, res) => {
    db.book.create(
      ["title", "author", "genre"],
      [req.body.title, req.body.author, req.body.genre],
      (result) => {
        res.json({ id: result.insertId });
      }
    );
  });

  app.put("/api/books/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    db.book.updateOne(
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, the the ID must not exist, so 404 error
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
};
// Export routes for server.js to use

//(referenced unit13-activity17-catsController.js)
