// HANDLER FUNCTIONS

// error handlers
exports.accessDeniedHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({status: "ERROR", operationMessage: "FORBIDDEN"});
};

exports.notFoundHandler = function (res){
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end({status: "ERROR", operationMessage: "NOT_FOUND"});
};

exports.dataNullHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({ status: "ERROR", operationMessage: "DATA_NULL" });
};

exports.execErrorHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({ status: "ERROR", operationMessage: "APP_ERROR" });
};

// success handlers
exports.successJSON = function (res, data){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end({ status: "SUCCESS", data: data });
};


