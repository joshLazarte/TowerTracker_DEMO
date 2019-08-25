const isEmpty = require("../../../utilities/isEmpty");
const format = name => name.trim().toUpperCase();

const addCities = data => {
  data.forEach(area => {
    area.name = format(area.name);
    area.cities = area.cities
      .filter(city => !isEmpty(city))
      .map(city => format(city));
    area.cities.forEach((city, i) => {
      area.cities[i] = { name: city };
    });
  });
};

const addNewCities = (cities, target) => {
  const newCities = cities.slice(target.length).filter(city => !isEmpty(city));
  newCities.forEach(city => {
    target.push({ name: format(city) });
  });
};

const addNewAreas = (areas, target) => {
  const newAreas = areas
    .slice(target.length)
    .filter(area => !isEmpty(area.name));
  addCities(newAreas);

  newAreas.forEach(area => {
    target.push(area);
  });
};

const updateMarketAreas = (market, data) => {
  market.areas.forEach((area, i) => {
    area.name = format(data.areas[i].name);
    area.cities.forEach((city, j) => {
      city.name = format(data.areas[i].cities[j]);
    });
    data.areas[i].cities.length > area.cities.length &&
      addNewCities(data.areas[i].cities, area.cities);
  });
};

module.exports = {
  addCities,
  addNewAreas,
  updateMarketAreas
};
