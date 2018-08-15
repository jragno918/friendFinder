// Dependencies
var path = require('path');

// Exports the html routes
module.exports = function(app) {

  // Route for the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Route for the home page
  app.get("*", function(app) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
