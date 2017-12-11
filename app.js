var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require("ejs");
var mongoose = require("mongoose");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("scripts"));
app.use(express.static("content"));
app.engine('html', ejs.renderFile);  
// routing
app.get("/", function(req, res) {
  res.render("index.html");
});


// listening port declaration
app.listen(3000, function() {
  console.log("Server has started");
});
