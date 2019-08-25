const express = require('express'),
  router = express.Router(),
  Market = require('../../models/Market'),
  validateUser = require('../../auth/validateUser'),
  verifyMode = require('../../auth/verifyMode'),
  isEmpty = require('../../utilities/isEmpty'),
  {
    addNewAreas,
    updateMarketAreas,
    addCities
  } = require('./utils/marketUtils');

const root = process.env.APP_ROOT;

router.post('/', validateUser, verifyMode, async (req, res) => {
  try {
    let market;
    const marketData = req.body.market;
    marketData.region = req.session.user.region;

    if (!isEmpty(marketData._id)) {
      market = await Market.findById(marketData._id);
      market.name = marketData.name;
      updateMarketAreas(market, marketData);
      addNewAreas(marketData.areas, market.areas);
    } else {
      delete marketData._id;
      marketData.areas = marketData.areas.filter(area => !isEmpty(area.name));
      addCities(marketData.areas);
      market = new Market(marketData);
    }

    await market.save();
    res.redirect(root + '/dashboard');
  } catch (err) {
    console.log(err);
    req.flash('danger', 'Unable to Save Market... Try Again');
    res.redirect(root + '/dashboard');
  }
});

module.exports = router;
