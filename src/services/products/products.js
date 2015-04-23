var restify = require("restify");
var db = require('../../db/mongo.js');
var response = require('../../lib/response.js');
var mongoose = require('mongoose');

var getProductHandler = function(req, res, next) {
    if (req.params.id) {
        // console.log(req.params.id, typeof req.params.id);

        try {
            mongoose.Types.ObjectId(req.params.id);
        } catch (err) {
            response.badRequest(res, "Wrong id formatting");
            return next();
        }

        db.products.findById(mongoose.Types.ObjectId(req.params.id), function(err, product) {
            // console.log(product);
            if (err) {
                console.log(err);
                response.internalError(res);
            } else if(!product) {
                response.notFound(res, product);
            } else {
                console.log("FOUND");
                response.found(res, product);
            }
            return next();
        });

    } else {
        console.log("missing parameter");
        response.badRequest(res, "Missing id parameter");
        return next();
    }
};

var getAllProductsHandler = function(req, res, next) {
    db.products.find(function(err, products) {
        if (err || !products) {
            console.log("error");
            response.internalError(res);
            return next();
        }

        response.found(res, products);
        return next();
    });
};

exports.getProduct = getProductHandler;
exports.getAllProducts = getAllProductsHandler;
