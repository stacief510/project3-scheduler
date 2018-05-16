var db = require('../models');

function index(req, res){
    console.log('GET user index')
    db.User.find({}, function(err, user){
        if(err){
            res.send(err);
        }
        return res.json(user);
    });
}

function create(req, res){
    console.log('POST user')
    console.log(req.body)
    db.User.create(req.body, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}

function show(req, res){
    console.log('GET one user')
    console.log(`req.params.id: ${req.params.id}`);
    db.User.findById(req.params.id, function(err,foundUser){
        res.json(foundUser);
    });
    db.User
        .findOne({_id:req.params.id})
        .populate('events')
        .exec(function(err, events) {
            if (err) {
                res.status(500).send(err);
            }
            console.log('found and populated all events: ', events);
            res.json(events);
        });
}

function userEvents(req, res){
    console.log('GET user and events')
    console.log(`req.params.id: ${req.params.id}`);
    db.Event
        .find({user_id: req.params.id},function (err, events) {
            console.log(events);
            res.json(events);
        })

}



module.exports = {
    index: index,
    create: create,
    show: show,
    userEvents: userEvents
}