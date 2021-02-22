/* Search book based on genre - Select a Genre Dropdown: choose a genre
for every genre, return five options (first five in genre array)

// hard-code bookshelf values so can display covers

// api route based on genre
// ex. api/books/genre/:{{genre}}

*/

const express = require("express");
const router = express.Router();

// Import the model (bookshelf.js) to use its database functions
const book = require("../models/bookshelf.js");

// Create all our api routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  book.selectAll((data) => {});
});

router.post("/api/books", (req, res) => {
  book.insertOne(
    ["title", "author", "genre"],
    [req.body.title, req.body.author, req.body.genre],
    (result) => {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/books/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  book.updateOne(
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

// Export routes for server.js to use
module.exports = router;

//(referenced unit13-activity17-catsController.js)
