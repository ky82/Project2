var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Song.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Let's make a Mixtape!",
        songs: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/song/:id", function(req, res) {
    db.Song.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("song", {
        song: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
