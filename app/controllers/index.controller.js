var Featured = require("../models/featured");

var controller = {};
controller.get = function (req, res) {
    Featured.find({}, function (err, data) {
        res.json(data);     
    });  
};
controller.get = function(req,res) {
	res.render('index');
};
controller.getFeaturedMovies = function(req, res){
    Featured.find({}, function (err, data) {
        res.json(data);     
    }); 
};
module.exports = controller;