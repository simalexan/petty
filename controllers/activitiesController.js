var Activity = require('../models/activity.js');

exports.addActivity = function (activity, callback) {
    activity.createActivity(function (err, activity) {
        if (err) callback(err, null);
        else callback(null, activity);
    });
};

