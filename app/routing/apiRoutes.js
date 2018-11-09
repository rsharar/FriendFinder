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
    // friends.push(newFriend);

    // CALC SUM OF NEW FRIEND SCORES
    // convert survey responses to integers
    var newFriendTotalScore = 0;
    var newFriendScoreArr = [];
    for (var j=0; j<newFriend.scores.length; j++){
        newFriend.scores[j] = parseInt(newFriend.scores[j])
        newFriendTotalScore = newFriendTotalScore + newFriend.scores[j];
    }
    newFriendScoreArr.push(newFriendTotalScore);
    console.log(newFriend.name + ": " + newFriendTotalScore);

    // CALC SUM OF FRIENDS SCORES
    var diffArr = [];
    for (i in friends){
        // declare variable to store scores of friends currently in DB
        var dbFriendScores = friends[i].scores;
            var dbFriendTotalScore = 0;
            for (var k=0; k<dbFriendScores.length;k++){
                dbFriendScores[k] = parseInt(dbFriendScores[k]);
                dbFriendTotalScore = dbFriendTotalScore + dbFriendScores[k];
            }
        diffArr.push(newFriendScoreArr - dbFriendTotalScore)
    }
    console.log(diffArr)

    // FIND SMALLEST DIFFERENCE IN TOTAL SCORES
    var min = Math.min.apply(diffArr)
    console.log(min)

    // RETURN THE 'BEST MATCH' in modal
    res.json(req.body);
});

}






