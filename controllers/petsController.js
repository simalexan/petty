var Pet = require('../models/pet.js');

exports.addPet = function (res, name, userId, callback) {
    var newPet = new Pet;
    newPet.name = name;
    newPet.health = 100;
    newPet.userId = userId;
    newPet.isAlive = true;
    newPet.savePet( function (result) {
        callback(result);
    });
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