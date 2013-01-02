var mongoose = require('mongoose'),
    log = console.log,
    Schema = mongoose.Schema;

var petSchema = new Schema({
    name: String,
    health: Number,
    userId: Number
});

petSchema.methods.gainHealth = function (healthIncrease) {
    log("Current health: " + this.health);
    log("Health increase: " + healthIncrease);
    if(this.health + healthIncrease > 100){
        this.health = 100;
        log("Pet is already on maximum health");
    }else{
        this.health += healthIncrease;
    }
    log("Current health: " + this.health);
};

petSchema.methods.loseHealth = function (healthDecrease) {
    log("Current health: " + this.health);
    log("Health decrease: " + healthDecrease);
    if(this.health - healthDecrease <= 0){
        this.die();
        log("Your pet has died");
    }else{
        this.health -= healthDecrease;
    }
    log("Current health: " + this.health);
};

petSchema.methods.die = function () {
    log("Current health: " + this.health);
    this.health = 0;
    log("Current health: " + this.health);
    if(this.health == 0){
        log("Ha-ha! Your pet has died. ~ Sometimes I wonder if I am a good person at all.");
    }
};

petSchema.methods.updatePet = function () {
    if (this._id != null && this.health != null && this.userId != null) {
        this.save();
    }
};

module.exports = mongoose.model('Pet', petSchema);