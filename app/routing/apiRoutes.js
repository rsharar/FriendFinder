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
    // return JSON of friends array
    res.json(newFriend);
});

}






