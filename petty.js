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

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(__dirname + '/public'))
    .use(connect.bodyParser())
    .use(function(req, res){

    //if (req.method == "POST") {

        log("Server home page on port 8000");

        switch (req.url) {



            case "/":

                res.writeHead(200, {'Content-Type': 'application/json'});
                var pet = new Pet({name: 'fluffy', health: 100, userId: 1});
                pet.loseHealth(15);
                res.end(JSON.stringify(pet));

                break;

            case "/sign_up":

                // prepare the parameters from the header and fill a User object
                var user = new User({username: 'someUsername', email: 'email@gmail.com', password: '1234', token: '1'});
                log('Variable user with following username: ' + user.username + ' loaded!');

                // preparing the HTTP response

                // calling the save function
                Users.addUser(user, function(err, result){
                    if(err){
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(err);
                    } else {
                        console.log("user save passed.");
                        console.log(result);

                        // test if there is a user by this name
                        Users.listAll(function (err, users) {
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.end(JSON.stringify(users));
                        });
                    }
                });
                break;

            case "/login":

            case "/logout":

            case "/user/delete":

            case "/pet/add":

            case "/activity/add":

            default:
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end({status: "NOTHING"});
        }
    /*} else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>No such page or directory</h1>");
        res.end();
    }*/


    });
http.createServer(app).listen(8000);