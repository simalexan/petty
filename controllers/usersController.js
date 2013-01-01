var User = require('../models/user.js');


// create a user by calling the model method createUser
exports.createUser = function (req, res, user, callback) {
    User.find({email: user.email}, function(err, users) {

        if(err) throw err;

        if(users.length > 0){
            callback("A user with that email already exists", null);
        }else{
            user.createUser();
            callback(null, user);
        }

    });
};

// function for listing all of the users
exports.listAll = function () {
    User.find(function(err, users) {
        if(err) throw err;
        else JSON.stringify(users);
    });
};

// function for getting one specific user by his username
exports.show = function (req, res, username) {
    User.findOne({username: username}, function(err, user) {
        if(err){
            throw err;
        } else{
            console.log(JSON.stringify(user));
            return(user);
        }

    })
};