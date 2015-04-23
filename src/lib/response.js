var found = function(res, message) {
    res.contentType = 'json';
    res.status(200);
    res.send(message);
};

var notFound = function(res, message) {
    res.contentType = 'json';
    res.status(404);
    res.send(message);
};

var internalError = function(res) {
    res.contentType = 'json';
    res.status(501);
    res.send({"message": "internalError"});
};

var badRequest = function(res, errorMessage) {
    res.contentType = 'json';
    res.status(400);
    res.send({"message": errorMessage});
};

exports.found = found;
exports.notFound = notFound;
exports.internalError = internalError;
exports.badRequest = badRequest;