var success = function(res, message, status) {
    res.contentType = 'json';
    res.status(status||200);
    res.send({
        message: message
    });
};

var error = function(res, error) {
    res.send(error);
};

exports.success = success;
exports.error = error;