var Twit = require ('twit');

var config = require ('./config.js');

var T = new Twit(config);

var tweet = {
	status: '#This is a make or break moment for #Ethiopia #Oromo'
}

T.post('statuses/update', tweet, twitted);

function twitted(err, data, response){
	if (err){
		console.log("Something went wrong.");
	} else {
		console.log("It worked!");
	}
	
	}
};