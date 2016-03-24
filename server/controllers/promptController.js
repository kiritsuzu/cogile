var prompts = require('./prompts');
var fs = require('fs');
var path = require('path');

var handlers = {};

var jsFiles = [
		"01-identity.js",
		"02-first.js"
	];

var getRandomJS = function(){
	return jsFiles[Math.floor(Math.random() * jsFiles.length)];
};


handlers.random = function(req, res){
	// console.log("__dirname", __dirname);

	fs.readFile(path.join(__dirname, '../library/prompts/' + /*req.data.language  ||*/  'js/' + /*req.data.prompt ||*/ getRandomJS()), 'utf-8', function(err, data){
		console.log(err);
		// console.log(data);
		res.send(data);
	});
};

handlers.specific = function(req, res){

	// If query parameter is received, serve specific puzzle, otherwise serve up first puzzle
	if (req.query.puzzleName) {
		puzzleName = req.query.puzzleName;
	} else {
		puzzleName = '01-identity';
	}

	fs.readFile(path.join(__dirname, '../library/prompts/' + /*req.data.language  ||*/  'js/' + puzzleName + '.js'), 'utf-8', function(err, data){
		console.log(err);
		// console.log(data);
		res.send(data);
	});

}

module.exports = handlers;