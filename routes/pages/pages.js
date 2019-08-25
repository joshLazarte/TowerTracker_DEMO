const express = require('express'),
  router = express.Router(),
  Tech = require('../../models/Tech'),
  Market = require('../../models/Market'),
  Region = require('../../models/Region'),
  validateUser = require('../../auth/validateUser');

const getCities = market => {
  const cities = market.areas.map(area => area.cities);
  return [].concat.apply([], cities);
};

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/', validateUser, async (req, res) => {
  try {
    const { user } = req.session;
    let markets, techs;

    if (user.isAdmin) {
      markets = await Market.find({ region: user.region });
      techs = await Tech.find({ region: user.region });
    } else {
      markets = [await Market.findById(user.market)];
      techs = await Tech.find({ market: user.market });
    }

    markets.forEach(market => {
      market.cities = getCities(market);
    });

    res.render('index', {
      markets,
      techs,
      isAdmin: req.session.user.isAdmin,
      root: res.locals.root
    });
  } catch (err) {
    console.log(err);
    res.send('Something went wrong...');
  }
});

router.get('/dashboard', validateUser, async (req, res) => {
  const { user } = req.session;
  if (!user.isAdmin) return res.redirect('/');
  try {
    const region = await Region.findById(user.region);
    const markets = await Market.find({ region: user.region });
    const techs = await Tech.find({ region: user.region });

    res.render('dashboard', { region, markets, techs, root: res.locals.root });
  } catch (err) {
    console.log(err);
    res.send('App is down');
  }
});

module.exports = router;
