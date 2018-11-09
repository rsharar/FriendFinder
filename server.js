// ---- DEPENDENCIES ----- //
var express = require('express');

// Sets up the Express App
var app = express();

// port for Heroku or localhost
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server
app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});