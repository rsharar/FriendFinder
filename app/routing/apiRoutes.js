// ---- DEPENDENCIES ----- //
var express = require('express');
var path = require('path');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// empty friends array
var friends = []

// get route to load home.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

// GET route to API of all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// add newFriend object data to friends array
app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
});


//test connection to server
app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
})