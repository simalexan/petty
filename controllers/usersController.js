var App = require('applicationController.js');
var Helper = requre('helperController.js');
var User = require('../models/user.js');
var crypto = require('crypto');


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

// function for logging in one specific user by his email & passwords
exports.login = function (req, res) {

    if(req.body.user){
        var userEmail = req.body.user.email;
        var userPassword = req.body.user.password;

        // checking if the required attributes have data
        if(!Helper.isVarNull(userEmail) && !Helper.isVarNull(userPassword)){
            User.findOne({email: userEmail, password: userPassword}, function(err, user) {
                if(err) App.execErrorHandler(res);
                else {
                    var newToken = crypto.createHash('md5').update(Date.now()).digest("hex");
                    user.update({ token: newToken }, function (err, result){
                        if(err) App.execErrorHandler(res);
                        else App.successJSON(res, result);
                    });
                }
            });
        } else {
            App.dataNullHandler(res);
        }
    } else {
        App.accessDeniedHandler(res);
    }

};

exports.signup = function (req, res){

    if(req.body.user){
        // get the parameters from the header and fill a User object
        var username = req.body.user.username;
        var userEmail = req.body.user.email;
        var userPassword = req.body.user.password;
        var newToken = crypto.createHash('md5').update((new Date).getUTCDate()).digest("hex");
        var currentDate = (new Date).getUTCDate();

        // checking if the required attributes have data
        if(!Helper.isVarNull(username) && !Helper.isVarNull(userEmail) && !Helper.isVarNull(userPassword)){
            var user = new User({username: username, email: userEmail, password: userPassword, token: newToken, createdAt: currentDate});
            User.findOne({email: user.email}, function(err, resultUser) {

                if(err) App.execErrorHandler(res);
                else{
                    if(resultUser){
                        res.writeHead(403, {"Content-Type": "application/json"});
                        res.end({ status: "ERROR", operationMessage: "USER_EXISTS" });
                    }else{
                        user.createUser(function (err, user) {
                            if (err) App.execErrorHandler(res);
                            else App.successJSON(res, user);
                        });
                    }
                }

            });
        } else {
            App.dataNullHandler(res);
        }
    } else {
        App.accessDeniedHandler(res);
    }
};