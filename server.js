// DEPENDENCIES

var express = require('express');
// var favicon = require('express-favicon');
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); 

app.use('/public', express.static(path.join(__dirname, 'public')));
var PORT = process.env.PORT || 8080;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



// ROUTER
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

