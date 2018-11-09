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
    // CALC SUM OF NEW FRIEND SCORES
    // convert survey responses to integers
    var newFriendTotalScore = 0;
    for (var j=0; j<newFriend.scores; j++){
        parseInt(newFriend.scores[j])
        newFriendTotalScore = newFriendTotalScore + newFriend.scores[j];
    }

    // CALC SUM OF FRIENDS SCORES
    for (i in friends.length){
        // declare variable to store scores of friends currently in DB
        var dbFriend = friends[i].scores;
        console.log(dbFriend);
        
    }

    // FIND SMALLEST DIFFERENCE IN TOTAL SCORES
    // RETURN THE 'BEST MATCH' in modal
});

}






