var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// give access to the public folder
app.use(express.static("public"));

// use the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup handlebars as our render engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import and use routes for the server
var routes = require("./controllers/restaurant_controller.js");

app.use(routes);

// set the server to start listening to our port
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
