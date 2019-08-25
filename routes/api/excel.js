const express = require("express"),
  router = express.Router(),
  excelTemplate = require("../../templates/excelTemplate"),
  Tower = require("../../models/Tower"),
  Tech = require("../../models/Tech"),
  Market = require("../../models/Market"),
  excel = require("node-excel-export"),
  path = require("path"),
  { filterRange } = require("../../utilities/dateUtilities"),
  validateApiReq = require("../../auth/validateApiReq"),
  validateUser = require("../../auth/validateUser");

router.post("/filter-params", validateApiReq, (req, res) => {
  req.session.filterParams = req.body;
  res.json({ msg: "success" });
});

router.get("/", validateUser, async (req, res) => {
  let { user, filterParams } = req.session;
  let range = null;
  if (!filterParams) filterParams = {};
  if (!user.isAdmin) filterParams.market = user.market;
  filterParams.region = user.region;

  if (filterParams.range) {
    range = filterParams.range;
    delete filterParams.range;
  }

  const towers = await Tower.find(filterParams)
    .populate({ path: "lastServiceTech", model: Tech })
    .populate({ path: "assignedTech", model: Tech })
    .populate({ path: "market", model: Market });

  for (let tower of towers) {
    const area = tower.market.areas.id(tower.area);
    const city = area.cities.id(tower.city);
    tower.cityName = city.name;
  }

  const dataset = await filterRange(range, towers);

  const report = excel.buildExport([
    {
      name: "Cell Tower Report",
      heading: excelTemplate.heading,
      merges: excelTemplate.merges,
      specification: excelTemplate.specification,
      data: dataset
    }
  ]);

  res.attachment("Cell Tower Report.xlsx");
  return res.send(report);
});

router.get("/qc-checklist", validateUser, (req, res) => {
  const file = path.join("./docs", "QC Checklist.xlsx");
  res.download(file, err => err && console.log(err));
});

module.exports = router;
