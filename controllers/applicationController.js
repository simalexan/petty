// HANDLER FUNCTIONS

// ERROR Handlers
//--------------------------------//
// application access denied error
exports.accessDeniedHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({status: "ERROR", operationMessage: "FORBIDDEN"});
};

// application not found error
exports.notFoundHandler = function (res){
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end({status: "ERROR", operationMessage: "NOT_FOUND"});
};

// application received data null error
exports.dataNullHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({ status: "ERROR", operationMessage: "DATA_NULL" });
};

// application execution error
exports.execErrorHandler = function (res){
    res.writeHead(403, {"Content-Type": "application/json"});
    res.end({ status: "ERROR", operationMessage: "APP_ERROR" });
};

// SUCCESS handlers
//--------------------------------//
exports.successJSON = function (res, data){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end({ status: "SUCCESS", data: data });
};


