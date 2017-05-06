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
})

router.post('/burgers', function(req, res){
    //insert one
})

router.put('/burgers/:id', function(req, res){
    //update one
})
//export router
module.exports = router;