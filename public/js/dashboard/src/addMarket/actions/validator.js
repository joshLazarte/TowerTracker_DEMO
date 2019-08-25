import _ui from "../uiElements";
import utils from "../../utils";
const { isEmpty } = utils;

const validator = {
  getCurrentFormValues: () => {
    return {
      name: _ui.dynamicElements.areaName.value,
      cities: _ui.dynamicElements.areaCities.map(input => input.value)
    };
  },

  AllCityFieldsAreFilledOut: () => {
    let fieldsOK = true;
    const { cities } = validator.getCurrentFormValues();
    cities.forEach(city => {
      if (isEmpty(city)) return (fieldsOK = false);
    });

    return fieldsOK;
  },

  allSavedCitiesFieldsAreFilledOut: areaCount => {
    let fieldsOK = true;
    const cities = _ui.savedAreaElements[areaCount].areaCities.map(
      city => city.value
    );
    cities.forEach(city => {
      if (isEmpty(city)) return (fieldsOK = false);
    });

    return fieldsOK;
  },

  areaFieldsAreValid: () => {
    const { name, cities } = validator.getCurrentFormValues();
    if (isEmpty(name) || isEmpty(cities[0])) return false;
    return true;
  },

  validateMarketForm: () => {
    const { name, cities } = validator.getCurrentFormValues();
    let response = { isValid: true, msg: null };

    if (isEmpty(_ui.marketName.value)) {
      response.isValid = false;
      response.msg = "Market Name is Required";
    } else if (
      _ui.savedAreaElements.length === 0 &&
      !validator.areaFieldsAreValid()
    ) {
      response.isValid = false;
      response.msg = "Please Fill Out the Form";
    } else if (
      (isEmpty(name) && !isEmpty(cities[0])) ||
      (!isEmpty(name) && isEmpty(cities[0]))
    ) {
      response.isValid = false;
      response.msg = "Please Save Staged Area";
    }

    return response;
  }
};

export default validator;
