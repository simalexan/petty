var mongoose = require('mongoose')
    , log = console.log
    , Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    createdAt: {type: Date, default: Date.now}
});

userSchema.methods.createUser = function () {
    if(this.username != null && this.email != null && this.password != null && this.token != null){
        this.save();
    }else{
        console.log("STRANGE MODEL ERROR!")
    }
};

userSchema.methods.updateUser = function () {
    if(this.username != null && this.email != null && this.password != null){
        this.update();
    }else{
        console.log("STRANGE MODEL ERROR!")
    }
};

module.exports = mongoose.model('User', userSchema);