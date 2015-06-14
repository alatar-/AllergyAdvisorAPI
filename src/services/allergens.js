var restify = require("restify");
var db = require('../db/mongo.js');
var response = require('../lib/response.js');
var mongoose = require('mongoose');

var getAllAllergens = function(req, res, next) {
    searchName = req.params.name || ".*";

    db.Allergen.find({"name": {$regex: searchName, $options: "i"} }, function(err, allergens) {
        if (err || !allergens) {
            console.log("error");
            response.internalError(res);
            return next();
        }

        response.found(res, allergens);
        return next();
    });
};

exports.getAllAllergens = getAllAllergens;
