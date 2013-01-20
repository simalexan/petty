var http = require('http'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    connect = require('connect'),
    Pet = require('./models/pet.js'),
    User = require('./models/user.js'),
    Activity = require('./models/activity.js'),
    Pets = require('./controllers/petsController.js'),
    Users = require('./controllers/usersController.js'),
    Activities = require('./controllers/activitiesController.js'),
    log = console.log,
    index;

fs.readFile('./public/index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

// connect to the MongoDB database
mongoose.connect('mongodb://localhost/test');

var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(__dirname + '/public'))
    .use(connect.bodyParser())
    .use(function(req, res){

    if (req.method == "POST") {

        log("Server home page on port 8000");

        switch (req.url) {

            case "/":
                //temporary
                accessDeniedHandler(res);
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
                //temporary
                accessDeniedHandler(res);
                break;

            case "/logout":
                //temporary
                accessDeniedHandler(res);
                break;

            case "/user/update":
                //temporary
                accessDeniedHandler(res);
                break;

            case "/pet/add":

                if(req.body.pet){
                    // getting new pet attributes
                    var name = req.body.pet.name;
                    var userId = req.body.pet.user_id;

                    // checking if the required attributes have data
                    if(name != null && name != undefined && userId != null && userId != undefined){
                        Pets.addPet(res, name, userId, function (result){
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.end(JSON.stringify(result));
                        });
                    } else {
                        res.writeHead(404, {'Content-Type': 'application/json'});
                        res.end({ status: "ERROR", operationMessage: "DATA_NULL" });

                    }
                } else{
                    accessDeniedHandler(res);
                }
                break;

            case "/activity/add":
                //temporary
                accessDeniedHandler(res);
                break;

            default:
                accessDeniedHandler(res);
                break;
        }
    }else if (req.method == 'GET') {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(index);
            res.end();
        }


    });
http.createServer(app).listen(8000);


// HANDLER FUNCTIONS
function accessDeniedHandler(res){
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end({status: "FORBIDDEN"});
}