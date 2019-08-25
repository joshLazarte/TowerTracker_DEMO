import { showAddMarket, showRegionData } from "../../../viewCtrl/actions";
import { handleAddAreaClick, handleAddCitiesClick } from "../addMarket";
import DM from "./domManipulator";
import _ui from "../../uiElements";
import _state from "../../state";
import utils from "../../../utils";
import { addDynamicClickListener } from "../../eventListeners";
import removeAlert from "../../../alerts/removeAlert";

const handleThreeCitiesOrLess = area => {
  area.cities.forEach((city, i) => {
    _ui.dynamicElements.areaCities[i].value = city.name;
  });
  handleAddAreaClick();
};

const handleMoreThanThreeCities = area => {
  const chunkedCities = utils.chunk(area.cities, 3);
  let i = 0;
  chunkedCities.forEach(chunk => {
    chunk.forEach(city => {
      _ui.dynamicElements.areaCities[i].value = city.name;
      i++;
    });
    chunk.length === 3 && handleAddCitiesClick();
  });
  handleAddAreaClick();
};

const populateForm = market => {
  market.areas.forEach(area => {
    _ui.dynamicElements.areaName.value = area.name;
    area.cities.length <= 3
      ? handleThreeCitiesOrLess(area)
      : handleMoreThanThreeCities(area);
  });
};

const loadEditMarketForm = e => {
  e.preventDefault();
  clearMarketForm(false);
  const market = JSON.parse(e.target.dataset.market);
  showAddMarket();
  DM.setEditStateContent(market.name, market._id);
  populateForm(market);
};

const handleEditStateAddAreaClick = () => {
  DM.editStateShowAddArea();
};

const clearMarketForm = goBack => {
  _state.updater.resetAll();
  DM.clearMarketContent();
  _ui.updateDynamicElements(0);
  _ui.clearSavedAreaElements();
  addDynamicClickListener(
    _ui.dynamicElements.addCitiesBtn,
    handleAddCitiesClick
  );
  removeAlert(_ui.marketAlert);
  goBack && showRegionData();
};

export { loadEditMarketForm, handleEditStateAddAreaClick, clearMarketForm };
