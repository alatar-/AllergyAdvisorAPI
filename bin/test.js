/* */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/warsztaty');
var autoIncrement = require('mongoose-auto-increment');
/* */

/* */
var usersSchema = new mongoose.Schema({
	email: String,
	personalNote: String
});

var db = mongoose.connection;
mongoose.set('debug', true);
autoIncrement.initialize(db);

usersSchema.plugin(autoIncrement.plugin, 'users');
var Users = mongoose.model('users', usersSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log('connected to db');

    Users.create({
        'email': "SDasfd"
    });
});
