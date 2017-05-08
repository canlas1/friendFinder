var name = $("#name").val().trim();
var photo = $("#photo").val().trim();
var q1 = $("#q1").val().trim();
var q2 = $("#q2").val().trim();
var q3 = $("#q3").val().trim();
var q4 = $("#q4").val().trim();
var q5 = $("#q5").val().trim();
var q6 = $("#q6").val().trim();
var q7 = $("#q7").val().trim();
var q8 = $("#q8").val().trim();
var q9 = $("#q9").val().trim();
var q10 = $("#q10").val().trim();


console.log(name);
console.log(photo);
console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(q6);
console.log(q7);
console.log(q8);
console.log(q9);
console.log(q10);


$("#submit").on("click", function() {
    console.log("BOUBACAR");



    var friendsData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        score: [$("#q1").val().trim(), $("#q2").val().trim(), $("#q3").val().trim(), $("#q4").val().trim(), $("#q5").val().trim(), $("#q6").val().trim(), $("#q7").val().trim(), $("#q8").val().trim(), $("#q9").val().trim(), $("#q10").val().trim()]
    }


    // Grab the URL of the website
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/friends", friendsData, function(data){


    })
});
