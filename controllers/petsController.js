var App = require('applicationController.js');
var Helper = requre('helperController.js');
var Pet = require('../models/pet.js');

exports.addPet = function (req, res) {

    if(req.body.pet){
        // getting new pet attributes
        var name = req.body.pet.name;
        var userId = req.body.pet.user_id;

        // checking if the required attributes have data
        if(!Helper.isVarNull(name) && !Helper.isVarNull(userId)){
            var newPet = new Pet;
            newPet.name = name;
            newPet.health = 100;
            newPet.userId = userId;
            newPet.isAlive = true;
            newPet.savePet(function (result) {
                App.successJSON(res, result);
            });
        } else {
            App.dataNullHandler(res);
        }
    } else{
        App.accessDeniedHandler(res);
    }
};

exports.updatePet = function (res, name, userId, callback) {
    callback();
};

exports.deletePet = function (res, id, userId, callback) {
    callback();
};

exports.findPetById = function (res, id, callback) {
    callback();
};