var db = require('../models');

function index(req, res){
	db.Event.find({}, function(err, event){
		if(err){
			res.send(err);
		}
		return res.json(event);
	});
}


function create(req, res){
	db.Event.create(req.body, function(err, event){
		if(err){
			res.send(err);
		}
		res.json(event);
	});
}


function show(req, res){

	console.log(`req.params.id: ${req.params.id}`);
	db.Event.findById(req.params.id, function(err,foundEvent){
		res.json(foundEvent);

	});

}

module.exports = {
	index: index,
	create: create,
	show: show
}