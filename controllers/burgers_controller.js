//import express
var express = require('express');
//import burger.js
var burger = require('../models/burger.js');
//create router for app
var router = express.Router();


//Actual routes
//Get
router.get('/', function(req, res){
//select all
    burger.selectAll(function(data){
        var burObject = {
            burgers: data
        };
        console.log(burObject);
        res.render('index', burObject);
    });
});

router.post('/burgers', function(req, res){
    //insert one
    burger.insertOne([
        'burger_name'
    ],[
        req.body.burger_name
    ], 
    function(data){
        res.redirect('/');
    });
});



router.put('/burgers/:id', function(req, res) {
    //update one
    var newBurger = 'id = ' + req.params.id;

    burger.updateOne ({
        devoured: true
    }, 
    condition, function(data) {
        res.redirect('/');
    });
});
//export router
module.exports = router;