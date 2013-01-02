var User = require('../models/user.js');


// create a user by calling the model method createUser
exports.addUser = function (user, callback) {

    User.find({email: user.email}, function(err, users) {

        if(err) callback(err, null);

        if(users.length > 0){
            callback("A user with that email already exists", null);
        }else{
            user.createUser(function (err) {
                if (err) callback(err, null);
                else callback(null, user);
            });
        }
    });
};

// function for listing all of the users
exports.listAll = function (callback) {

    User.find(function(err, users) {
        if(err) callback(err, null);
        else callback(null, users);
    });
};

// function for getting one specific user by his username
exports.show = function (username, callback) {

    User.findOne({username: username}, function(err, user) {
        if(err) callback(err, null);
        else callback(null, user);
    })
};