var restify = require("restify");
var db = require('../db/mongo.js');
var response = require('../lib/response.js');
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
        // console.log(mongoose.Types.ObjectId(req.params.id));
        db.Product.findById(mongoose.Types.ObjectId(req.params.id), function(err, product) {
            // console.log(product);
            if (err) {
                console.log(err);
                response.internalError(res);
            } else if(!product) {
                console.log("NOT FOUND");
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
    db.Product.find(function(err, products) {
        if (err || !products) {
            console.log("error");
            response.internalError(res);
            return next();
        }

        response.found(res, products);
        return next();
    });
};

var addProductHandler = function(req, res, next) {
    console.log("I am here");

    if (
        req.params.name &&
        req.params.producer &&
        req.params.allergens
    ) {
        db.Product.create({ 
            name: req.params.name,
            producer: req.params.producer,
            allergens: req.params.allergens
        }, function (err, new_prod) {
            if (err) {
                throw err;
            }
        });
    } else {
        console.log("missing parameters");
        response.badRequest(res, "Missing parameters");
        return next();
    }
};

exports.getProduct = getProductHandler;
exports.getAllProducts = getAllProductsHandler;
exports.addProduct = addProductHandler;