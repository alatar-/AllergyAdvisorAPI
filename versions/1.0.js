//-- API 1.0

var products = require('../services/products/products.js');

var init = function(server) {

    server.get('/', function(req, res, next){
        res.json({
            message: 'hello world!'
        });

        return next();
    });

    //-- Product routes

    server.get('/product/:id', products.getProduct);
    // server.get('/1.0/users', products.getAllProducts);

    // server.get('/1.0/:lang/users/:id', users.getUser);
    // server.get('/1.0/:lang/users', users.getAllUsers);


};

exports.init = init;