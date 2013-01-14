var http = require('http'),
    mongoose = require('mongoose'),
    connect = require('connect'),
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

    if (req.method == "POST") {
        if(req.url == '/'){

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write('<h2>Petty project Home page</h2>');
            log("Server home page on port 8000");
            var pet = new Pet({name: 'fluffy', health: 100, userId: 1});
            pet.loseHealth(15);
            res.write(JSON.stringify(pet));
            res.end();

        } else if (req.url == '/signup') {

            // prepare the parameters from the header and fill a User object
            var user = new User({username: 'someUsername', email: 'email@gmail.com', password: '1234', token: '1'});
            log('Variable user with following username: ' + user.username + ' loaded!');

            // preparing the HTTP response

            // calling the save function
            Users.addUser(user, function(err, result){
                if(err){
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.write(err);
                    res.end();
                } else {
                    console.log("user save passed.");
                    console.log(result);

                    // test if there is a user by this name
                    Users.listAll(function (err, users) {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.write(JSON.stringify(users));
                        res.end();
                    });
                }
            });
        } else if (req.url == '/login') {

        } else if (req.url == '/logout') {

        } else if (req.url == '/users/delete') {

        } else if (req.url == '/pets/add') {

        } else if (req.url == '/activities/add') {

        } else {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write("{ status: 'NOTHING'}");
            res.end();
        }
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>No such page or directory</h1>");
        res.end();
    }


}).listen(8000, 'localhost');