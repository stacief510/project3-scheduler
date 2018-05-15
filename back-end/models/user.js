var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = require('./event.js');

var UserSchema = new Schema ({
	name: String,
	age: Number,
	occupation: String,
	events: Event.schema
});

var User = mongoose.model('User', UserSchema);
module.exports = User;