var db = require('../models');

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

function update(req, res){
	console.log('PUT one event')
	console.log(`req.params.id: ${req.params.id}`);
	db.Event.findById(req.params.id, function(err, foundEvent){
		if (err) {
            console.log(err);
        } else {
			foundEvent.title = req.body.title,
			foundEvent.time = req.body.time,
			foundEvent.day = req.body.day.toLowerCase(),

			foundEvent.save()
			res.json(foundEvent);
		}
	});
}

function destroy(req, res) {
    db.Event.findByIdAndRemove(req.params.id, function(err, foundEvent) {
        if (err) {
            console.log(err);
        }
        res.send("post deleted");
    });
}

module.exports = {
	create: create,
	show: show,
	update: update,
	destroy: destroy
}