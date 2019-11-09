var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req,res){
	res.redirect("song")
});
router.get("/song", function(req,res){
	songs.selectAll(function(data){
		var hbsObject = {
			song: data
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