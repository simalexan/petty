var mongoose = require('mongoose'),
    log = console.log,
    Schema = mongoose.Schema;

var activityTypeSchema = new Schema({
    name: String
});

activityTypeSchema.methods.createActivityType = function (callback){
    if(this.name != null){
        this.save();
        callback(null, this);
    }else{
        callback("ValidationError. Required attributes for CREATE activityType are null. Please check!", null);
    }
};

activityTypeSchema.methods.updateActivityType = function (callback){
    if(this.name != null && this._id != null){
        this.update();
        callback(null, this);
    }else{
        callback("ValidationError. Required attributes for UPDATE activityType are null. Please check!", null);
    }
};

activityTypeSchema.methods.deleteActivityType = function (callback){
    if(this.name != null && this._id != null){
        this.delete(this._id, function(err, result){
            if(err) callback(err, null);
            else callback(null, result);
        });
    }else{
        callback("ValidationError. Required attributes for DELETE activityType are null. Please check!", null);
    }
};

module.exports = mongoose.model('ActivityType', activityTypeSchema);