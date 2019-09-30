//create dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose"); 
var axios = require("axios"); 
var cheerio = require("cheerio");

var PORT = process.env.PORT || 8020;
var app = express();

// create static file
app.use(express.static("public"));

// Parse the json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// If deployed, use the databse or go local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoarticle";

mongoose.connect(MONGODB_URI, function(err) {
  if (err) {
      console.log(err);
  }
  else {
   console.log("Mongoose connection is successful.");
  }
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT);
});