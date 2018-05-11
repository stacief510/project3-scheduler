var db = require('../models');

function index(req, res){
	db.Event.find({}, function(err, event){
		if(err){
			res.send(err);
		}
		res.json(event);
	});
}

module.exports = {
	index: index
}