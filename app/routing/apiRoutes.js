// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ===============================================================================

var friendsData = require("../data/friends");

module.exports = function(app) {
  //API GET Requests
  //handles when user "visits a page"
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/friends", function(req, res) {
    res.JSON(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a friends request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    //push this from the form
    var userResultsArray = [];

    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.JSON({
        message: "successfully added to friends"
      });
    };

  });

  app.post("/api/clear", function() {
    //empty out the array of data
    friendsArray = [];

    console.log(friendsData);
  });
};
