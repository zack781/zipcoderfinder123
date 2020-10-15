var express = require('express');
var anyDB = require('any-db');

//Make sure zipcodes.db exists before you do this!
var conn = anyDB.createConnection('sqlite3://zipcodes.db');

var app = express();

app.get('/:zipcode', function(request, response){
	var requested_zipcode = request.params.zipcode;	// grabs zip code from user's URL request

	var final = "Hello World";

		//console.log(result);

		conn.query( 'SELECT * FROM zipcodes WHERE zipcode = ($1);', [requested_zipcode], function(err, result){
	
		for (var i=0; i<result.rowCount; i++){
			response.write(JSON.stringify(result.rows[i]) + "\n");
		}	
		response.end();
	});
// TODO: Delete this, query the database (using the conn object), then response.write the database's response to the page.
	
	
});

app.get('/', function(request, response){
	response.end('<p>Landing Page</p>');
});

//Visit localhost:8080
app.listen(8880);
