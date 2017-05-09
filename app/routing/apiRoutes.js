// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

var friends = require("../data/friends");

module.exports = function(app) {
    //API GET Requests
    //handles when user "visits a page"
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    app.get("/api/friends", function(req, res) {
        res.json(friends);

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a friends request... this data is then sent to the server...
    // Then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        if (friends.length < 10) {
            friends.push(req.body);
            res.json({
                message: "added successfully to tables"
            })
        }

        //create a bestMatch Object
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
        

        //loop through friends data array to get the friends scores
        for (var i = 0; i < friendsSize; i++) {
            console.log("This is the Friends name: " + friends[i].name)
             totalDifference = 0;
            //loop through friens score ant the user score and calculate abs difference, push the totalDifference
           
            for (var j = 0; j < friends[i].scores[j]; j++) {
                console.log("THIS IS THE FRIENDS SCORE: " + friends[i].scores[j]);

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // totalDifference = 0, userScore = 3

                console.log("THIS IS THE TOTAL DIFFERENCE: " + totalDifference)

                if (totalDifference <= bestMatch.variance) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.variance = totalDifference;
                }


            }
        }


        console.log("=======================")

        friends.push(userData);
        console.log("=======================")

        res.json(bestMatch);
    });
};
// console.log(friendsData);
