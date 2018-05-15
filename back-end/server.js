var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// var routes = require('./config/routes');
var eventsController = require('./controllers/events');
var usersController = require('./controllers/users');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

app.get('/users', usersController.index)
app.post('/users', usersController.create)
app.get('/users/:id', usersController.show)

app.get('/events', eventsController.index)
app.post('/events', eventsController.create)
app.get('/events/:id', eventsController.show)
app.delete('/events/:id', eventsController.destroy)
app.put('/events/:id', eventsController.update)



//app.use(routes);





let port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});