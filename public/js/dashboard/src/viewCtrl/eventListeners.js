import _ui from "./UiElements";
import { showRegionData, showAddMarket, showAddTech } from "./actions";

const loadEventListeners = () => {
  _ui.showRegionDataBtn.addEventListener("click", e => {
    e.preventDefault();
    showRegionData();
  });
  _ui.showAddMarketBtn.addEventListener("click", e => {
    e.preventDefault();
    showAddMarket(true);
  });
  _ui.showAddTechBtn.addEventListener("click", e => {
    e.preventDefault();
    showAddTech(null);
  });
};

export default loadEventListeners;
