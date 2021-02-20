const express = require("express");

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

// handlebar routes?

// Routes - import routes and give the server access to them - for favorited books...
const routes = require("./routes/api-routes");

app.use(routes);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
