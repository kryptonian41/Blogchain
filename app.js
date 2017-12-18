var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require("ejs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Blogchain");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("scripts"));
app.use(express.static("content"));
app.engine("html", ejs.renderFile);

// member schema
var member_schema = mongoose.Schema({
  name: String,
  url: String
});

var member_list = mongoose.model("member_list", member_schema);

// routing
app.get("/", function(req, res) {
  res.redirect("/home");
});

app.get("/home", function(req, res) {
  res.render("index");
});

app.get("/bitcoin", function(req, res) {
  res.render("bitcoin");
});

app.get("/blockchain", function(req, res) {
  res.render("blockchain");
});

app.get("/ethereum", function(req, res) {
  res.render("ethereum");
});

app.get("/team", function(req, res) {
  member_list.find({}, function(err, members) {
    if(!err)
      res.render("team", { member_list: members });
  });
});
// listening port declaration
app.listen(3000, function() {
  console.log("Server has started");
});
