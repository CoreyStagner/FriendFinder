///////////////////////////////////////////////
// Requires
///////////////////////////////////////////////

var friends = require('../data/friends.js');

///////////////////////////////////////////////
// Functions
///////////////////////////////////////////////

module.exports = function(app){

	// API GET Requests
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	// API POST Requests
	app.post("/api/friends", function(req, res){

		// Initial Variables
		var input 	= req.body;
		var userName 	= input.name;
		var userPhoto 	= input.photo;
		var userScores 	= input.scores;
		
		var totalDifference = 0;
		
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 0
		};
		
		for  (var i=0; i< friends.length; i++) {

			totalDifference = 0;

			// Loop through all the scores of each friend
			for (var j=0; j< friends[i].scores[j]; j++){

				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
		// the database will always return that the user is the user's best friend).
		friends.push(input);

		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
		res.json(bestMatch);
		console.log("Best Friend is " + bestMatch.name);
	});

}