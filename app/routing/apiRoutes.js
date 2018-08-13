// Dependencies
var path =  requier('path');

// Import friends list
var friends = require('../data/friends.js');

// Export routes
module.exports = function(app) {

  // Get route to display a JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Post route that will handle incoming survey results
  // and will also handle compatability logic
  app.post("/api/friends", function(req,res) {

      // Get user input
      var userInput = req.body;

      // Get response from user
      var userResponse = userInput.scores;

      // Logic for top friends
      var topName = "";
      var topImage = "";
      var totalDiff= 5000;

      for (var i = 0; i < friends.length; i++) {
        var difference = 0;
        for (var k = 0; k < userResponse.length; k++) {
          difference += Math.abs(friends[i].scores[k] - userResponse[k]);
        }

        if (difference < totalDiff) {
          totalDiff = difference;
          topName = friends.[i].name;
          topImage = friends[i].photo;
        }
      }

    // Create a new user
    friends.push(userInput);

    // Give correct response
    res.json({status: 'OK', topName: topName, topImage: topImage});
  });
};
