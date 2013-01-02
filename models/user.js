var mongoose = require('mongoose'),
    log = console.log,
    Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    createdAt: {type: Date, default: Date.now}
});

userSchema.methods.createUser = function (callback) {
    if(this.username != null && this.email != null && this.password != null && this.token != null){
        this.save(function (err) {
            if (err) callback('Error occurred while creating a User with username: ' + this.username, null);
            else callback(null, this);
        });
    }else{
        console.log("Some of the required attributes are null. Please check.");
    }
};

userSchema.methods.updateUser = function () {
    if(this._id != null && this.username != null && this.email != null && this.password != null){
        this.save(function (err) {
            if (err) console.log('Error occurred while updating a User with username: ' + this.username);
        });
    }else{
        console.log("Some of the required attributes are null. Please check.");
    }
};

module.exports = mongoose.model('User', userSchema);