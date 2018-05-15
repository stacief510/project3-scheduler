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


app.get('/', eventsController.index)
app.post('/events', eventsController.create)
app.get('/events/:id', eventsController.show)
app.delete('/events/:id', eventsController.destroy)




//app.use(routes);





let port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});