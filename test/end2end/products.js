var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var config = require('../../config.json');
var db = require('../../src/db/mongo.js');

var url = 'http://localhost:' + config.port;

var getProduct = function(expectStatus, fields, endFn) {
    request(url)
    .get('/products/' + (fields ? fields : ""))
    .expect('Content-Type', /json/)
    .expect(expectStatus)
    .end(endFn);
};

describe('Products', function() {
    describe('Get single product', function() {
        context('when id exists', function(){
            it('should return one product object', function(done) {
                getProduct(200, "5537fb5d341815faf24ec57e", function(err, res){
                    if (err) {
                        console.log(err, res.body);
                        throw err;
                    
                    }
                    res.body.should.have.property("_id");
                    res.body.should.have.property("name");
                    res.body.should.have.property("producer");
                    res.body.should.have.property("description");
                    res.body.should.have.property("allergens");
                    res.body.should.have.property("history");
                    done();
                });
            });
        });

        
        // context('when id exists', function(){
        //     it('should return one product object', function(done) {
        //         getProduct(200, "5537fb5d341815faf24ec57e", function(err, res){
        //             if (err) {
        //                 console.log(err, res.body);
        //                 throw err;
                    
        //             }
        //             res.body.should.have.property("_id");
        //             res.body.should.have.property("name");
        //             res.body.should.have.property("producer");
        //             res.body.should.have.property("description");
        //             res.body.should.have.property("allergens");
        //             res.body.should.have.property("history");
        //             done();
        //         });
        //     });
        // });
        // context('when id doesnt exist', function(){
        //     it('should return 404 message', function(done){
        //         getProduct(404, "5537fb5d341815faf24ec56e", function(err, res){
        //             if (err) {
        //                 console.log(err, res.body)
        //                 throw err;
        //             }
        //             console.log(res.body);
        //             res.message.should.not.have.property("_id");
        //             done();
        //         });
        //     });
        // });
    });

    // describe('Add new product', function() {
    //     context('when all requirements are satified', function(){
    //         it('should return one product object', function(done) {

    //             data = {
    //                 'name': "Chelb wiejski 150g",
    //                 'producer': "Zielony staw",
    //                 'allergens': [
    //                     {
    //                         'name': 'gluten',
    //                     }

    //                 ]
    //             }

    //             request(url)
    //             .post('/products')
    //             .send(data)
    //             .expect('Content-Type', /json/)
    //             .expect(201)
    //             .end(done);

    //             // saveProduct(201, "5537fb5d341815faf24ec57e", function(err, res){
    //             //     if (err) {
    //             //         throw err;
    //             //     }
    //             //     res.body.should.have.property("_id");
    //             //     res.body.should.have.property("name");
    //             //     res.body.should.have.property("producer");
    //             //     res.body.should.have.property("description");
    //             //     res.body.should.have.property("allergens");
    //             //     res.body.should.have.property("history");
    //             //     done();
    //             // });
    //         });
    //     });
    // });
});
