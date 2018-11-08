// Required path dependency
var path = require('path');


module.exports = function (app) {

    // get route to load survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    // default route to homepage
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}
