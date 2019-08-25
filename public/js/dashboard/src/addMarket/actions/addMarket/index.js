import _state from "../../state";
import _ui from "../../uiElements";
import DM from "./domManipulator";
import {
  addDynamicArrowBtnListener,
  addDynamicClickListener
}
from "../../eventListeners";
import insertAlert from "../../../alerts/insertAlert";
import removeAlert from "../../../alerts/removeAlert";
import validator from "../validator";

const { updateDynamicElements } = _ui;

let { updater } = _state;

const handleAddCitiesClick = e => {
  if (!validator.AllCityFieldsAreFilledOut())
    return insertAlert(
      _ui.marketAlert,
      "danger",
      "Fill Out All City Fields Before Adding More Cities"
    );
  updater.updateCityCount();
  DM.appendAdditionalCitiesRow(
    _ui.dynamicElements.citiesContainer,
    _state.areaCount,
    _state.cityCount
  );
  _ui.pushAdditionalCities(
    _ui.dynamicElements.areaCities,
    _state.areaCount,
    _state.cityCount
  );
  removeAlert(_ui.marketAlert);
};

const handleSavedAddCitiesClick = e => {
  const count = e.target.dataset.areacount;
  const areaData = _state.savedAreaData[count];
  if (!validator.allSavedCitiesFieldsAreFilledOut(count))
    return insertAlert(
      _ui.savedAreaElements[count].savedAreaAlert,
      "danger",
      "Fill Out All City Fields Before Adding More Cities"
    );
  updater.updateSavedAreaCityCount(count);
  DM.appendAdditionalCitiesRow(
    _ui.savedAreaElements[count].citiesList,
    areaData.areaCount,
    areaData.cityCount
  );
  _ui.pushAdditionalCities(
    _ui.savedAreaElements[count].areaCities,
    areaData.areaCount,
    areaData.cityCount
  );
  removeAlert(_ui.savedAreaElements[count].savedAreaAlert);
};

const handleArrowButtonClick = (e, elements) => {
  const count = e.target.dataset.areacount;
  const { nameField, citiesSection } = elements;
  DM.toggleNameFieldDisabled(nameField);
  DM.toggleCitiesDisplay(citiesSection);
  DM.toggleArrowButtonContent(count);
  removeAlert(_ui.savedAreaElements[count].savedAreaAlert);
};

const handleAddAreaClick = () => {
  if (!validator.areaFieldsAreValid())
    return insertAlert(_ui.marketAlert, "danger", "Fill Out All Fields");
  DM.setSavedAreaHeader();
  DM.removeOldFields();
  DM.appendSavedArea();
  _ui.updateSavedAreaElements(_state.areaCount);

  const { nameField, citiesSection } = _ui.savedAreaElements[_state.areaCount];

  DM.styleSavedAreas(nameField, citiesSection);
  addDynamicArrowBtnListener(_ui.savedAreaElements[_state.areaCount]);
  addDynamicClickListener(
    _ui.savedAreaElements[_state.areaCount].savedAddCities,
    handleSavedAddCitiesClick
  );
  updater.addSavedAreaData({
    areaCount: _state.areaCount,
    cityCount: _state.cityCount
  });
  updater.updateAreaCount();
  DM.appendAdditionalFields();
  updateDynamicElements(_state.areaCount);
  addDynamicClickListener(
    _ui.dynamicElements.addCitiesBtn,
    handleAddCitiesClick
  );
  updater.resetCityCount();
  removeAlert(_ui.marketAlert);
};

const handleToggleAreasClick = e => {
  e.target.id === "toggle-saved-area-display" &&
    DM.toggleSavedAreasDisplay(e.target);
};

const handleToggleCompletionClick = () => {
  _state.formCompleted = !_state.formCompleted;

  if (_state.formCompleted) {
    const response = validator.validateMarketForm();
    if (!response.isValid) {
      _state.formCompleted = false;
      return insertAlert(_ui.marketAlert, "danger", response.msg);
    }
    if (validator.areaFieldsAreValid()) {
      handleAddAreaClick();
    }
  }

  DM.toggleCompletionState(_state.formCompleted);
};

export {
  handleAddAreaClick,
  handleAddCitiesClick,
  handleArrowButtonClick,
  handleToggleAreasClick,
  handleToggleCompletionClick
};
