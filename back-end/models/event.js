var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user' );

var EventSchema = new Schema ({
	title: String,
	day: String,
	time: String,
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;