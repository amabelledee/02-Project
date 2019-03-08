var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // BELLE route for Upcoming
  app.get("/upcoming", function (req, res) {
    db.Example.findAll({ order: [['eventDate', 'ASC']] }).then(function (dbExamples) {
      res.render("upcoming", {
        examples: dbExamples
      });
    });
  })

  //BELLE - render page to dashboard
  app.get("/dashboard", function (req, res) {
    db.Example.findAll({ order: [['eventDate', 'ASC']] }).then(function (dbExamples) {
      res.render("dashboard", {
        examples: dbExamples
      });
    });
  });

  //render page to add gig
  app.get("/add", function (req, res) {

    res.render("addevent")
  })

  app.get("/request", function (req, res) {
    res.render("request")
  })

  app.get("/thankyou", function (req, res) {
    res.render("thankyou")
  })

  app.get("/calendar", function (req, res) {
    res.render("calendar")
  })

  app.get("/vendors", function (req, res) {
    db.Example.findAll({ order: [['vendor', 'ASC']] }).then(function (dbExamples) {
      res.render("vendors", {
        examples: dbExamples
      });
    });
  })

  app.get("/admin", function (req, res) {
    db.Request.findAll({}).then(function (dbRequests) {
      res.render("admin", {
        requests: dbRequests
      })
    })

  })

  app.get("/events", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("events", {

        examples: dbExamples
      });
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
