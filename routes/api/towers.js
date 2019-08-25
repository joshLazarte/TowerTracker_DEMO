const express = require('express'),
  router = express.Router(),
  Tower = require('../../models/Tower'),
  Tech = require('../../models/Tech'),
  Market = require('../../models/Market'),
  validateApiReq = require('../../auth/validateApiReq'),
  verifyModeClient = require('../../auth/verifyModeClient');

router.get('/', validateApiReq, async (req, res) => {
  try {
    let foundTowers;
    const { market, region } = req.session.user;

    if (market) {
      foundTowers = await Tower.find({ market: market }).populate({
        path: 'lastServiceTech',
        model: Tech
      });
    } else {
      foundTowers = await Tower.find({ region: region }).populate({
        path: 'lastServiceTech',
        model: Tech
      });
    }

    res.json(foundTowers);
  } catch (err) {
    console.log(err);
    res.status(400).send('App is down');
  }
});

const getTowersArea = (market, city) => {
  const foundArea = market.areas
    .map(area => area)
    .find(area => area.cities.indexOf(city) !== -1);
  return foundArea._id;
};

router.post('/', validateApiReq, verifyModeClient, async (req, res) => {
  const { user } = req.session,
    towerData = req.body;
  towerData.region = user.region;
  if (!towerData.market) towerData.market = user.market;
  const foundMarket = await Market.findById(towerData.market);
  towerData.area = getTowersArea(foundMarket, towerData.city);

  try {
    if (towerData._id) {
      const updatedTower = await Tower.findByIdAndUpdate(
        towerData._id,
        towerData,
        { new: true }
      );
      res.json(updatedTower);
    } else {
      const newTower = new Tower(towerData);
      await newTower.save();
      res.json(newTower);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

module.exports = router;
