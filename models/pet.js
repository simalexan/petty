var mongoose = require('mongoose'),
    log = console.log,
    Schema = mongoose.Schema;

var petSchema = new Schema({
    name: String,
    health: Number,
    userId: Number,
    isAlive: Boolean
});

// PET GAIN HEALTH
petSchema.methods.gainHealth = function (healthIncrease, callback) {

    if(this.health + healthIncrease > 100){

        this.health = 100;
        this.savePet(function (result) {

            if(result.status == "SUCCESS") {
                result.operationMessage = "HEALTH_FULL";
            }
            callback(result);
        });
    }else{
        this.health += healthIncrease;
        this.savePet(function (result) {
            if(result.status == "SUCCESS") {
                result.operationMessage = "HEALTH_INCREASE";
            }
            callback(result);
        });
    }

};

// PET LOSE HEALTH
petSchema.methods.loseHealth = function (healthDecrease, callback) {

    if(this.health - healthDecrease <= 0){
        this.die(function (result) {
            if(result.status == "SUCCESS") {
                result.operationMessage = "HEALTH_DEAD";
            }
            callback(result);
        });
    }else{
        this.health -= healthDecrease;
        this.savePet(function (result) {

            if(result.status == "SUCCESS") {
                result.operationMessage = "HEALTH_DECREASE";
            }
            callback(result);

        });
    }
};

// PET DIE
petSchema.methods.die = function (callback) {

    this.health = 0;
    this.isAlive = false;
    this.savePet( function(result) {
        callback(result);
    });
};

// PET SAVE
petSchema.methods.savePet = function (callback) {

    if (this.name != null && this.health != null && this.userId != null) {
        this.save();
        callback({ status: "SUCCESS" });
    } else {
        callback({ status: "ERROR", operationMessage: "DATA_NULL" });
    }

};

module.exports = mongoose.model('Pet', petSchema);