const root = process.env.APP_ROOT;

module.exports = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.user = null;
    res.redirect(root + '/login');
  }
};
