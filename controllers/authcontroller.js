var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};
exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};
exports.dash2 = function(req, res) {
  res.render("dash2");
};
exports.events = function(req, res) {
  res.render("addevent");
};
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
