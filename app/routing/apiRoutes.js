//Dependencies
var friends = require("../data/friends.js");
//GET route to display API Friends List in JSON.
module.exports = function(app){
app.get("/api/friends", function(req, res) {
    res.json(friends);
});
//POST route to create new object with user survey results.
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var bestMatch = "";
    var totalDifference = 0;
    var defaultDifference = 1000;

    //Compare newFriend scores with closest scores from existing friends
   //Loop through all objects in the friends array.
    friends.forEach(function(potentialMatch){
        //Within each "potential match", loop through their scores
        for(var i = 0; i < potentialMatch.scores.length; i++) {
            //Calculate the absolute difference between potential match and current submission for each iteration.
            var scoreDifference = Math.abs(potentialMatch.scores[i] - newFriend.scores[i]);
            //Add up all iterations through the loop for the total score difference
            totalDifference += scoreDifference;
        }
        //If the new total is lower than the default, this potential match is the new best match.
        if(totalDifference < defaultDifference){
            bestMatch = potentialMatch.name;
            //Set the new default difference to the recent best match.
            defaultDifference = totalDifference
        }
        //Reset the total difference for the next time this runs.
        totalDifference = 0;

    });
    console.log(bestMatch);
    res.json(bestMatch);    
    friends.push(newFriend);
    
    //Have total scores for existing friends
    //loop through existing friends to find closest score

    }
);
}

//if you get req.body to console log friend data,
//you are getting close.