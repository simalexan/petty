// HELPER FUNCTIONS

// function for checking if a variable is null
exports.isVarNull = function (someVariable) {
    return !!(someVariable == null || someVariable == undefined || someVariable == "" || someVariable == " ");
};