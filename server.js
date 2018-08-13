// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express configuration

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./app.public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routers

require(path.join(__dirname, ".app//routes/apiRoutes"))(app);
require(path.join(__dirname, ".app//routes/htmlRoutes"))(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
