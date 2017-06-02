var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            variance: 100
        };

        var userData = req.body;
        console.log(userData);
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;
        var totalDifference = 0;
        var friendsSize = friends.length - 1;
        
        for (var i = 0; i < friendsSize; i++) {
            console.log("This is the Friends name: " + friends[i].name)
             totalDifference = 0;
            for (var j = 0; j < friends[i].scores[j]; j++) {
                console.log("THIS IS THE FRIENDS SCORE: " + friends[i].scores[j]);
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                console.log("THIS IS THE TOTAL DIFFERENCE: " + totalDifference)
                if (totalDifference <= bestMatch.variance) {
                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.variance = totalDifference;
                }
            }
          res.json(bestMatch);
        }
        console.log("=======================")
        friends.push(userData);
        console.log("=======================")      
        console.log(bestMatch);
    });
};

