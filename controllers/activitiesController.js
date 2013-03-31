var Activity = require('../models/activity.js');


// function for creating an activity
exports.addActivity = function (activity, callback) {
    activity.createActivity(function (err, activity) {
        if (err) callback(err, null);
        else callback(null, activity);
    });
};