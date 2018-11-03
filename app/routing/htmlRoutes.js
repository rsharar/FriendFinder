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

// get route to load home.html
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
 })

 // get route to load survey.html
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
 })

 //test connection to server
 app.listen(PORT,function(){
    console.log("Server is listening on PORT: " + PORT);
 })