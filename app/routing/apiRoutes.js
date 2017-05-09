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
      if (friends.length <10) {
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

        for (var i = 0; i < friends.length; i++) {
            console.log("This is the Friends name: " + friends[i].name)

            
            console.log("THIS IS THE 1st FRIENDS SCORE: " + friends[i].scores)

            for (var j = 0; j < friends[i].scores[j]; j++) {
              console.log("THIS IS THE FRIENDS SCORE: " + friends[i].scores[j]);

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // totalDifference = 0, userScore = 3
 
                console.log("THIS IS THE TOTAL DIFFERENCE: " + totalDifference)

                if (totalDifference<= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }


            }
        }

        console.log("=======================")
            // console.log(res);


        // function scoreParser(array) {
        //  for (var i = 0; i < array.length - 1 ; i++) {
        //    array[i]= parseInt(array[i]);
        //     console.log("THIS IS FRIENDS NAME: " + array[i].name);





        // scoreParser(userData.scores);
        // console.log(userData);
        console.log("=======================")
        console.log("=======================")



        // var totalVariance = 0;

        // for (var i = 0; i < userData.length; i++){
        //  console.log("THIS IS FRIENDS NAME: " + userData[i].name);
        // }

        // assign id to the name 
        // create an array of ids called userArray
        //create scoreArray for each id
        //push all results into an object
        // loop through userarray and print scoresArray for each user
        //
        // req.body.scores and each instance of friendsData[i].scores


        // 
        friends.push(req.body);
    });
};
// console.log(friendsData);
