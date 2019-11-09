var express = require("express");

var router = express.Router();

var songs = require("../models/song.js");

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
	songs.insertOne([
		"track"
		],[
			req.body.track
			], function(data){
				res.redirect("/songs");
			});
});

module.exports = router;