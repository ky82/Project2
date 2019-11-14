var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/songs", function(req, res) {
    db.Song.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/songs", function(req, res) {
    db.Song.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/songs/:id", function(req, res) {
    db.Song.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
