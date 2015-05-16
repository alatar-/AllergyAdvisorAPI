//-- Dependencies
var restify = require('restify');
var mongoose = require('mongoose');
var db = require('./src/db/mongo.js');
var config = require('./config.json');

//-- Versions
var api_1_0 = require('./src/versions/1.0');

//-- Create server
var server = restify.createServer({
    name: config.name
});
server.use(restify.bodyParser());  // turns request data into js object 
server.use(restify.queryParser()); // parses the HTTP query string

//-- Initialize API versions
api_1_0.init(server);

//-- Initialize db connection
db.init(config.mongo_host, config.mongo_username, config.mongo_pass, config.mongo_dbname, config.debug);

//-- Run server
var port = parseInt(process.argv[2], 10) || config.port;
mongoose.connection.once('open', function() {
    console.log("Running %s on %s (%s)...", server.name, server.url, server.log.fields.hostname);
    server.listen(port, function() {
        console.log("    OK");
    });
});
