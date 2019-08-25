module.exports = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.user = null;
    return res.status(401).json({
      status: '401',
      error: 'You Are Not Authorized'
    });
  }
};
