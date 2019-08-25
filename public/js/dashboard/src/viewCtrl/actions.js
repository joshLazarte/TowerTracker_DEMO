import _ui from "./UiElements";
import { clearEditTechForm } from "../editTech/actions/toggleTechFormDisplay";
import { clearMarketForm } from "../addMarket/actions/editMarket";
const views = [_ui.regionDataContent, _ui.addMarketContent, _ui.addTechContent];

const displayTarget = target => {
  views.forEach((view, index) => {
    target === index ?
      (view.style.display = "block") :
      (view.style.display = "none");
  });
};
const showRegionData = () => {
  displayTarget(0);
};
const showAddMarket = (clearForm) => {
  displayTarget(1);
  clearForm && clearMarketForm(false);
};
const showAddTech = tech => {
  displayTarget(2);
  !tech && clearEditTechForm(false);
};

export { showRegionData, showAddMarket, showAddTech };
