var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var petSchema = new Schema({
    name: String,
    health: Number,
    ownerId: Number
});

petSchema.methods.gainHealth = function (healthIncrease) {
    console.log("Current health: " + this.health);
    console.log("Health increase: " + healthIncrease);
    this.health += healthIncrease;
    console.log("Current health: " + this.health);
}

petSchema.methods.loseHealth = function (healthDecrease) {
    console.log("Current health: " + this.health);
    console.log("Health decrease: " + healthDecrease);
    this.health -= healthDecrease;
    console.log("Current health: " + this.health);
}

petSchema.methods.die = function () {
    console.log("Current health: " + this.health);
    this.health = 0;
    console.log("Current health: " + this.health);
    if(this.health == 0){
        console.log("Ha-ha! Your pet has died. ~ Sometimes I wonder if I am a good person at all.");
    }
}

module.exports = mongoose.model('Pet', petSchema);