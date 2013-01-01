var http = require('http'),
    mongoose = require('mongoose'),
    Pet = require('./models/pet.js'),
    User = require('./models/user.js'),
    Users = require('./controllers/usersController.js'),
    log = console.log;

// connect to the MongoDB database
mongoose.connect('mongodb://localhost/test');

http.createServer(function (req, res){

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        log("Server home page on port 8000");
        var pet = new Pet({name: 'fluffy', health: 100, ownerId: 1});
        pet.loseHealth(15);
        var user = new User({username: 'test', email: 'viktortuba@gmail.com', password: '1234', token: '1'});
        log('Created a user by this username: ' + user.username);

        // calling the save function
        Users.createUser(req, res, user, function(err, result){
            if(err){
                console.log(err);
            } else {
                console.log("user save passed.");
                console.log(result);

                // test if there is a user by this name
                var testUser = Users.show(req,res,'test');
                testUser.username = "viktor";
            }
        });
        res.end();
    }

}).listen(8000, 'localhost');