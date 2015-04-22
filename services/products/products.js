var restify = require("restify");
var db = require('../../db/mongo.js');
var response = require('../../lib/response.js');

var getProductHandler = function(req, res, next) {
    if (req.params.id) {
        // console.log(req.params.id, typeof req.params.id);

        db.products.find({id: req.params.id}, function(err, product) {
            if (err) {
                console.log("error");
            }
            
            // console.log(product);
            console.log("FOUND", product);
            // console.log(product);
            response.success(res, product);
            return next();
        });

    } else {
        console.log("missing parameter");
    }
};

exports.getProduct = getProductHandler;
