var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req,res){
	res.redirect("songs")
});

router.get("/songs", function(req,res){
	db.selectAll(function(data){
		var hbsObject = {
			songs: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/songs/add", function(req,res){
	db.insertOne([
		"track"
		],[
			req.body.track
			], function(data){
				res.redirect("/songs");
			});
});

module.exports = router;