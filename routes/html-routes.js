//save-book.js will save books to wishlist

// routes look inside views (sees layout and partials folder)
// views look inside partials
// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Index route loads view.html
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/index"))
  );

  // Add route loads the add.html page,
  // Where users can enter new characters to the db
  app.get("/wishlist", (req, res) =>
    res.sendFile(path.join(__dirname, "../views/wishlist"))
  );

  //   // All route loads the all.html page,
  //   // Where all characters in the db are displayed
  //   app.get('/all', (req, res) =>
  //     res.sendFile(path.join(__dirname, '../public/all.html'))
  //   );
};
