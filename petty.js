var http = require('http'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    connect = require('connect'),
    Pet = require('./models/pet.js'),
    User = require('./models/user.js'),
    Activity = require('./models/activity.js'),
    Pets = require('./controllers/petsController.js'),
    Application = require('./controllers/applicationController.js'),
    Users = require('./controllers/usersController.js'),
    //Activities = require('./controllers/activitiesController.js'),
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
                Application.notFoundHandler(res);
                break;

            case "/sign_up":
                Users.signup(req, res);
                break;

            case "/login":
                Users.login(req, res);
                break;

            case "/logout":
                //temporary
                Application.notFoundHandler(res);
                break;

            case "/user/update":
                //temporary
                Application.notFoundHandler(res);
                break;

            case "/pet/add":
                Pets.addPet(req, res);
                break;

            case "/activity/add":
                //temporary
                Application.notFoundHandler(res);
                break;

            default:
                //temporary
                Application.accessDeniedHandler(res);
                break;
        }
    }else if (req.method == 'GET') {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(index);
            res.end();
        }


    });
http.createServer(app).listen(8000);

