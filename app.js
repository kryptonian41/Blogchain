var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require("ejs");
app.set("view engine", "html");
app.use(express.static("public"));

// routing
app.get("/", function(req, res) {
  res.render("index");
});

app.listen(3000, function() {
  console.log("Server has started");
});
