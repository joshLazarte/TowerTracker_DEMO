const express = require('express'),
  router = express.Router(),
  { transport, mailOptions } = require('../../config/email'),
  Tower = require('../../models/Tower'),
  Tech = require('../../models/Tech'),
  emailTemplate = require('../../templates/emailTemplate.js'),
  validateApiReq = require('../../auth/validateApiReq'),
  verifyModeClient = require('../../auth/verifyModeClient');

('use strict');
const nodemailer = require('nodemailer');

router.post('/', validateApiReq, verifyModeClient, async (req, res) => {
  try {
    let tech;
    req.body.techID
      ? (tech = await Tech.findById(req.body.techID))
      : (tech = await Tech.findById(req.session.user.id));

    const foundTowers = [];

    if (!tech)
      return res.status(401).json({
        status: '401',
        error: 'You Are Not Authorized'
      });

    for (let id of req.body.towerIds) {
      const foundTower = await Tower.findById(id);
      if (foundTower) {
        foundTower.lastServiceDate = new Date().toDateString();
        foundTower.lastServiceTech = tech._id;
        foundTowers.push({
          city: foundTower.city,
          address: foundTower.address,
          accountNumber: foundTower.accountNumber
        });
        await foundTower.save();
      } else {
        continue;
      }
    }

    const emailBody = emailTemplate(foundTowers, tech);
    const transporter = nodemailer.createTransport(transport);

    const info = await transporter.sendMail(
      mailOptions(req.session.user.email, emailBody)
    );
    console.log('Message sent: %s', info.messageId);

    res.json({ msg: "Success! Check your email for your SRO's" });
  } catch (err) {
    console.log(err);
    res.json({ msg: 'Something Went Wrong... Try Again' });
  }
});

module.exports = router;
