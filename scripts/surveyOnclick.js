$("#submit").on("click", function() {
    console.log("BOUBACAR");


    var friendsData = {
        name: $(#name).val().trim();
        photo: $(#photo).val().trim();
        score: [$(#q1).val().trim(), $(#q2).val().trim(), $(#q3).val().trim(), $(#q4).val().trim(), $(#q5).val().trim(), $(#q6).val().trim(), $(#q7).val().trim(), $(#q8).val().trim(), $(#q9).val().trim(), $(#q10).val().trim()]
    }


    // Grab the URL of the website
    var currentURL = window.location.origin;

    $post(currentURL + "/api/friends", friendsData, function(data){


    })
});
