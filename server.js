// Dependencies
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware to parse json data.
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//Import js sheets containing routes.
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app);

var apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app);

var friendsapi = require("./app/data/friends.js")
friendsapi;
//Listening (typically goes at the very end).
app.listen(PORT, function() {
  console.log("Ready on PORT:" + PORT);
});

