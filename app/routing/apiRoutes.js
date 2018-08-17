var friends = require('../data/friends.js');

// Requests
module.exports = function(app) {

    // Get requests
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Post requests

    app.post('/api/friends', function(req, res) {
        // Obtain user inputs
        var userInput = req.body;

        var userResponse = userInput.scores;

        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;

        // Loop through all friends in the list to determind the highest scores
        for (var i = 0; i < friends.length; i++) {

          // Logic for differences between questions
          var difference = 0;
          for (var k = 0; k < userResponse.length; k++) {
            difference += Math.abs(friends[i].scores[j] - userResponse[j]);
          }
          console.log('difference' + difference);

          if (difference < totalDifference) {
            console.log("Closest match found = " + difference);
            console.log("Number 1 friends name is: " + friends[i].name);
            console.log("Number 1 friend photo is: " + friends[i].photo);

            totalDifference = difference;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
          }
        }

        // Add new friend
        friends.push(userInput);

        // Send response
        res.json({status: "good", matchName: matchName, matchImage: matchImage});

    });
};
