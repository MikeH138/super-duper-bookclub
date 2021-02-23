const express = require("express");

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

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

// Routes - import routes and give the server access to them
const routes = require("./routes/my-api-routes");
const routes2 = require("./routes/html-routes");

// Routes
require("./routes/my-api-routes")(app);
require("./routes/html-routes")(app);

// app.use(routes);
// app.use(routes2);

// Listener
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
