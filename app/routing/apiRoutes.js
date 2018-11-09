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

    // CALC DIFFERENCE BETWEEN SUM OF FRIENDS SCORES AND USER SCORES
    var diffArr = [];
    for (i in friends){
        // declare variable to store scores of friends currently in DB
        var dbFriendScores = friends[i].scores;
            var dbFriendTotalScore = 0;
            // ITERATE THROUGH SCORES OF EACH FRIEND
            for (var k=0; k<dbFriendScores.length;k++){
                dbFriendScores[k] = parseInt(dbFriendScores[k]);
                dbFriendTotalScore = dbFriendTotalScore + dbFriendScores[k];
            }
        // STORE DIFFERENCE BETWEEN SCORES IN AN ARRAY
        var diff = newFriendScoreArr - dbFriendTotalScore;
        // IF DIFF IS NEGATIVE CONVERT TO POSITIVE VALUE
        if (diff < 0){
            diff = diff * -1
            diffArr.push(diff)
        }
        else {
            diffArr.push(diff)
        }
    }
    console.log(diffArr)

    // FIND INDEX OF SMALLEST DIFFERENCE IN TOTAL SCORES
    var bestFriendIndex = diffArr.indexOf(Math.min(...diffArr));

    // RETURN THE 'BEST FRIEND' in modal
    res.json(friends[bestFriendIndex]);
});

}






