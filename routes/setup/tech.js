const express = require('express'),
  router = express.Router(),
  Tech = require('../../models/Tech'),
  bcrypt = require('bcryptjs'),
  validateUser = require('../../auth/validateUser'),
  verifyMode = require('../../auth/verifyMode'),
  isEmpty = require('../../utilities/isEmpty');

const formatName = name => {
  let trimmed = name.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

router.post('/', validateUser, verifyMode, async (req, res) => {
  try {
    const techData = req.body.tech;

    techData.firstName = formatName(techData.firstName);
    techData.lastName = formatName(techData.lastName);
    techData.region = req.session.user.region;

    const salt = await bcrypt.genSalt(10);
    techData.password = await bcrypt.hash(techData.techNumber, salt);

    if (!isEmpty(techData._id)) {
      await Tech.findByIdAndUpdate(techData._id, techData);
    } else {
      delete techData._id;
      const newTech = new Tech(techData);
      await newTech.save();
    }

    res.redirect('/dashboard');
  } catch (err) {
    req.flash('danger', 'Unable to save tech... try again');
    return res.redirect('/dashboard');
  }
});

module.exports = router;
