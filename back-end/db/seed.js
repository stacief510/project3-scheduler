var db = require('../models');

var events = [{
                    title:"walk dog",
                    day:"monday",
                    time:"8:00AM",
                    user_id: null,
                },
                {
                    title:"do the dishes",
                    day:"tuesday",
                    time:"8:00PM",
                    user_id: null,
                },
                {
                    title:"laundry",
                    day:"wednesday",
                    time:"8:00AM",
                    user_id: null,
                },
                {
                    title:"Play with the ball",
                    day:"wednesday",
                    time:"9:00AM",
                    user_id: null,
                },
                {
                    title:"Take a nap",
                    day:"thursday",
                    time:"8:00AM",
                    user_id: null,
                }];

var users=[{name: "Mark", age: 39, occupation:"Developer"},
    {name: "Charlie", age: 3, occupation:"Loyal dog"}];

db.User.remove({}, function(err, removedUsers){
    db.User.create(users, function(err, createdUsers){
        events.forEach(event => {
            event.user_id = createdUsers[0]._id;
        })

    db.Event.remove({}, function(err, removedEvents) {
        db.Event.create(events, function (err, createdEvents) {
            console.log('You created events', createdEvents);
            process.exit();
        });
    });

    });
});


