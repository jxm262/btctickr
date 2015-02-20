/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'Home',
    flash: req.session.flash
  });
};

exports.test = function(req, res) {
	res.json({hello: "world"});
};