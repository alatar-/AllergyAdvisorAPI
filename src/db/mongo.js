var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var init = function(host, user, pass, db, debug) {
    console.log("Connecting to db...");
    mongoose.connect('mongodb://' + host + '/' + db, function(err) {
        if (err) console.error.log(err);
        else console.log("    OK");
    });

    mongoose.set('debug', debug);
};

var productSchema = new Schema({
    name:     String,
    producer: String,
    description: String,
    allergens: [{ 
        name: String, 
        positive_votes: [ String ],
        negative_votes: [ String ],
    }],
    history: [{ 
    //     date: Date.now 
    }],
});

exports.init = init;
exports.products = mongoose.model('products', productSchema); 