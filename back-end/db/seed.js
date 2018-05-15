var db = require('../models');

var user1Events = [{
                    title:"walk dog",
                    day:"monday",
                    time:"8:00AM"
                },
                {
                    title:"do the dishes",
                    day:"tuesday",
                    time:"8:00PM"
                },
                {
                    title:"laundry",
                    day:"wednesday",
                    time:"8:00AM"
                }]

var user2Events =[
                {
                    title:"Play with the ball",
                    day:"wednesday",
                    time:"9:00AM"
                },
                {
                    title:"Take a nap",
                    day:"thursday",
                    time:"8:00AM"
                }];

var users=[{name: "Mark", age: 39, occupation:"Developer", events:user1Events},
    {name: "Charlie", age: 3, occupation:"Loyal dog", events:user2Events}];

db.User.remove({}, function(err, removedUsers){
    db.User.create(users, function(err, createdUsers){
        console.log('You created users', users);
        process.exit();
    });
});

db.Event.remove({}, function(err, removedEvents) {
    db.Event.create(user1Events, function (err, createdEvents) {
        console.log('You created events', user1Events);

    });

    db.Event.create(user2Events, function (err, createdEvents) {
        console.log('You created events', user2Events);
    });
});
