const express = require('express'),
  router = express.Router(),
  bcrypt = require('bcryptjs'),
  Admin = require('../../models/Admin'),
  Tech = require('../../models/Tech'),
  validateUser = require('../../auth/validateUser'),
  setUser = require('../../auth/setUser');

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const { root } = res.locals;
  try {
    let user;
    const admin = await Admin.findOne({ userName });

    if (admin) {
      user = admin;
      user.isAdmin = true;
    } else {
      user = await Tech.findOne({ PID: userName }).select('+password');
      if (user) user.isAdmin = false;
    }

    if (!user) {
      req.flash('danger', 'Invalid Credentials');
      return res.redirect(root + '/login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      setUser(user, req);
      user.isAdmin
        ? res.redirect(root + '/dashboard')
        : res.redirect(root + '/');
    } else {
      req.flash('danger', 'Password Incorrect');
      return res.redirect(root + '/login');
    }
  } catch (err) {
    console.log(err);
    req.flash('danger', 'There was an issue logging in');
    return res.redirect(root + '/login');
  }
});

router.post('/logout', validateUser, (req, res) => {
  req.session.destroy();
  res.redirect(res.locals.root + '/login');
});

module.exports = router;
