var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/project3-cal");

module.exports.Event = require('./event.js');
module.exports.User = require('./user.js');