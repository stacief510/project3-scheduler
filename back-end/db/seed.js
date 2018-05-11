var db = require(./models);

var events = [{
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
                },
                {
                    title:"laundry2",
                    day:"wednesday",
                    time:"9:00AM"
                },
                {
                    title:"walk dog",
                    day:"thursday",
                    time:"8:00AM"
                }]

db.Event.remove({}, function(err, removedEvents){
    db.Event.create(events, function(err, createdEvents){
        console.log('You created events', events);
        process.exit();
    });
}