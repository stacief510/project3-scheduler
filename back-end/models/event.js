var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema ({
	title: String,
	day: String,
	time: String
})

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;