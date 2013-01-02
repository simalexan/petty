var mongoose = require('mongoose'),
    log = console.log,
    Schema = mongoose.Schema;

var activitySchema = new Schema({
    petId: Number,
    activityTypeId: Number,
    date: {type: Date, default: Date.now},
    data: String
});

activitySchema.methods.createActivity = function (callback) {
    if(this.petId != null && this.activityTypeId != null && this.data != null){
        this.save();
        callback(null, this);
    }else{
        callback("ValidationError. Required attributes for CREATE activity are null. Please check!", null);
    }
};

activitySchema.methods.updateActivity = function (callback){
    if(this.petId != null && this.activityTypeId != null && this.data != null && this._id != null){
        this.update();
        callback(null, this);
    }else{
        callback("ValidationError. Required attributes for UPDATE activity are null. Please check!", null);
    }
};

activitySchema.methods.deleteActivity = function (callback){
    if(this.petId != null && this.activityTypeId != null && this.data != null && this._id != null){
        this.remove({_id: this._id}, function(err, result){
            if(err) callback(err, null);
            else callback(null, result);
        });
    }else{
        callback("ValidationError. Required attributes for DELETE activity are null. Please check!", null);
    }
};

module.exports = mongoose.model('Activity', activitySchema);
