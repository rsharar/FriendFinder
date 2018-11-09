// require data from friends.js
var friends = require("../data/friends")




module.exports = function(app){
// GET request to API of all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});
// POST request to add newFriend object data to friends array
app.post("/api/friends", function (req, res) {
    // store data from user survey in variable newFriend
    var newFriend = req.body;
    // push to friends array
    friends.push(newFriend);
    var newFriendScores = newFriend.scores.map(function(n){
        return parseInt(n);
    })
    //store comparison in array
    var comparisonArray = [];
    for (i in friends.length){
        // declare variable to store scores of friends currently in DB
        var dbFriend = friends[i].scores;
        
    }
});

}






