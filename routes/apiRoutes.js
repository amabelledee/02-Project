var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get all events
  app.get("/api/upcoming", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/vendors", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/requests", function(req, res) {
    db.Request.findall({}).then(function(dbrequests) {
      res.json(dbRequests)
    })
  })

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      console.log(req.body)
      res.redirect("/events")
      
    });
  });

  //new request
  app.post("/api/requests", function(req, res) {
    db.Request.create(req.body).then(function(dbRequest) {
      res.redirect("/thankyou")
    })
  })

  //transfer request to example
 

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.delete("/api/requests/:id", function(req, res) {
    db.Request.destroy({ where: { id: req.params.id } }).then(function(
      dbRequest
    ) {
      res.json(dbRequest);
    });
  });







};

