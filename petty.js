var http = require('http'),
    mongoose = require('mongoose'),
    Pet = require('./models/pet.js'),
    User = require('./models/user.js'),
    Activity = require('./models/activity.js'),
    Pets = require('./controllers/petsController.js'),
    Users = require('./controllers/usersController.js'),
    Activities = require('./controllers/activitiesController.js'),
    log = console.log;

// connect to the MongoDB database
mongoose.connect('mongodb://localhost/test');

http.createServer(function (req, res){

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('<h2>Petty project Home page</h2>');
        log("Server home page on port 8000");
        var pet = new Pet({name: 'fluffy', health: 100, userId: 1});
        pet.loseHealth(15);
        res.write(JSON.stringify(pet));
        res.end();
    }
    // USER ACTIVITES
    if (req.url == '/signup') {

        // prepare the parameters from the header and fill a User object
        var user = new User({username: 'stefan@me', email: 'stefan.simovic@me.com', password: '1234', token: '1'});
        log('Variable user with following username: ' + user.username + ' loaded!');

        // preparing the HTTP response

        // calling the save function
        Users.addUser(user, function(err, result){
            if(err){
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(err);
                res.end();
            } else {
                console.log("user save passed.");
                console.log(result);

                // test if there is a user by this name
                Users.listAll(function (err, users) {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write(JSON.stringify(users));
                    res.end();
                });
            }
        });
    }

    if (req.url == '/login') {

    }

    if (req.url == '/logout') {

    }

    if (req.url == '/users/delete') {

    }

    if (req.url == '/pets/add') {

    }

    if (req.url == '/activities/add') {

    }

}).listen(8000, 'localhost');