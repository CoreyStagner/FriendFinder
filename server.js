///////////////////////////////////////////////
// Requires
///////////////////////////////////////////////

var express = require("express");
var bodyParse = require("body-parser");
var path = require("path");

///////////////////////////////////////////////
// Initial Values
///////////////////////////////////////////////

// App Setup
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.text());
app.use(bodyParse.json({ type: "application/vnd.api+json" }));
app.use(express.static('app/public')); 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("Server listening on PORT " + PORT);
});