//-- API 1.0

var products = require('../services/products.js');

var init = function(server) {

    server.get('/', function(req, res, next){
        res.json({
            message: 'hello world!'
        });

        return next();
    });

    /**
     * @api {get} /products/:id Get product
     * @apiName GetProduct
     * @apiGroup Products
     *
     * @apiParam {String} [id]  Object id
     * @apiSampleRequest http://localhost:3531/products/554b183fa4a09606941e53bb
     *
     * @apiSuccess {Object} product Single product object.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "name" : "Nutella", 
     *          "producer" : "Ferrero", 
     *          "description" : null, 
     *          "allergens" : [ 
     *              { 
     *                  "name" : "Orzechy laskowe", 
     *                  "positive_votes" : 121, 
     *                  "negative_votes" : 2 
     *              } 
     *          ] 
     *      }
     *
     * @apiError BadRequest Wrong id formatting, see example.
     * @apiError InternalError Server internal error.
     * @apiError NotFound Resource not found.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 403 Bad request
     *     {
     *       "message": "Wrong id formatting",
     *     }
     */
    server.get('/products/:id', products.getProduct);

    /**
     * @api {get} /products Get all products
     * @apiName GetAllProducts
     * @apiGroup Products
     *
     * @apiSampleRequest http://127.0.0.1:3531/products
     *
     * @apiSuccess {Array} products List of products.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [
     *          {
     *              "name" : "Nutella", 
     *              "producer" : "Ferrero", 
     *              "description" : null, 
     *              "allergens" : [ 
     *                  { 
     *                      "name" : "Orzechy laskowe", 
     *                      "positive_votes" : 121, 
     *                      "negative_votes" : 2 
     *                  } 
     *              ] 
     *          },
     *          ...
     *     ]
     *
     * @apiError InternalError Server internal error.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Error
     *     {
     *       "message": "Internal error",
     *     }
     */
    server.get('/products', products.getAllProducts);

    /**
     * @api {get} /products Get all products
     * @apiName GetAllProducts
     * @apiGroup Products
     *
     * @apiSampleRequest http://127.0.0.1:3531/products
     *
     * @apiSuccess {Array} products List of products.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [
     *          {
     *              "name" : "Nutella", 
     *              "producer" : "Ferrero", 
     *              "description" : null, 
     *              "allergens" : [ 
     *                  { 
     *                      "name" : "Orzechy laskowe", 
     *                      "positive_votes" : 121, 
     *                      "negative_votes" : 2 
     *                  } 
     *              ] 
     *          },
     *          ...
     *     ]
     *
     * @apiError InternalError Server internal error.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Error
     *     {
     *       "message": "Internal error",
     *     }
     */
    server.get('/products', products.getAllProducts);

    /**
     * @api {post} /products Save new product
     * @apiName AddProduct
     * @apiGroup Products
     *
     * @apiSuccess {String} id Id of the product.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": "554b183fa4a09606941e53bb"
     *     }
     *
     * @apiError BadRequest One of the arguments is invalid.
     * @apiError InternalError Server internal error.
     * @apiError AlreadyExists Product with such name already exists
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "message": "Name is badly formatted.",
     *     }
     */
    // server.post('/1.0/users', users.registerUser);

    /**
     * @api {post} /products/:id/allergen/:id2/vote Vote for allergen
     * @apiName Vote
     * @apiGroup Votes
     *
     * @apiSuccess
     */


};

exports.init = init;
