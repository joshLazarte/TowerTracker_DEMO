module.exports = (req, res, next) => {
  if (process.env.MODE === 'DEMO') {
    req.flash('danger', 'Demo Mode is Read Only');
    res.redirect('back');
  } else {
    next();
  }
};
