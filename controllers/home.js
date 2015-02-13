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