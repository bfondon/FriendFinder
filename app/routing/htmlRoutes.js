//Dependencies
var path = require("path");

//Route to the survey page.
module.exports = function(app){
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Route to the home page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
};