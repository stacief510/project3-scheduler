var db = require('../models');

function index(req, res){
	console.log('GET event index')
	db.Event.find({}, function(err, event){
		if(err){
			res.send(err);
		}
		return res.json(event);
	});
}


function create(req, res){
	console.log('POST event')
	console.log(req.body)
	req.body.day = req.body.day.toLowerCase();
	db.Event.create(req.body, function(err, event){
		if(err){
			res.send(err);
		}
		res.json(event);
	});
}


function show(req, res){
	console.log('GET one event')
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