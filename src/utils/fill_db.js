var mongoose = require('mongoose');
var config = require('../../config.json');
var db = require('../db/mongo.js');

products = [
    {
        "name" : "Nutella", 
        "producer" : "Ferrero", 
        "description" : null, 
        "allergens" : [ 
            { 
                "name" : "Orzechy laskowe", 
                "positive_votes" : ["asd", "asfd", "sdaf"], 
                "negative_votes" : ["asd"] 
            } 
        ] 
    },
    {
        "name" : "Jogurt Bitto 400g", 
        "producer" : "Zielona Dolina", 
        "description" : null, 
        "allergens" : [ 
            { 
                "name" : "Mleko", 
                "positive_votes" : ["asd", "asfd", "sdaf"], 
                "negative_votes" : ["asd"] 
            } 
        ] 
    }
];

db.init(config.mongo_host, config.mongo_username, config.mongo_pass, config.mongo_dbname, config.debug);
mongoose.set('debug', false);
mongoose.connection.once('open', function() {
    db.Product.remove({}, function(err) { 
        console.log('products collection dropped');

        products.forEach(function(prod) {
            db.Product.create(prod, function (err, new_prod) {
               if (err) {
                    console.log(err);
                    throw err;
                }
                console.log("inserted: " + prod.name);
            });
        });
        process.exit(0);
    });
});
