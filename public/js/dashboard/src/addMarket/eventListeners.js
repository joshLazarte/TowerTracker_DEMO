import _ui from "./uiElements";
import {
  handleAddAreaClick,
  handleAddCitiesClick,
  handleArrowButtonClick,
  handleToggleAreasClick,
  handleToggleCompletionClick
}
from "./actions/addMarket";
import { loadEditMarketForm, handleEditStateAddAreaClick, clearMarketForm } from "./actions/editMarket";

const loadEventListeners = () => {
  _ui.dynamicElements.addCitiesBtn.addEventListener("click", () =>
    handleAddCitiesClick()
  );
  _ui.addAreaButton.addEventListener("click", () => handleAddAreaClick());

  _ui.savedAreasHeader.addEventListener("click", e =>
    handleToggleAreasClick(e)
  );

  _ui.toggleCompletionButton.addEventListener("click", () =>
    handleToggleCompletionClick()
  );

  [..._ui.editMarketButtons].forEach(btn => {
    btn.addEventListener("click", e => loadEditMarketForm(e));
  });

  _ui.editStateAddAreaBtn.addEventListener('click', () => handleEditStateAddAreaClick());

  _ui.cancelEditMarketBtn.addEventListener('click', () => clearMarketForm(true));
};

const addDynamicArrowBtnListener = elements => {
  const { arrowButton } = elements;
  arrowButton.addEventListener("click", e =>
    handleArrowButtonClick(e, elements)
  );
};

const addDynamicClickListener = (element, action) => {
  element.addEventListener("click", e => action(e));
};

export {
  loadEventListeners,
  addDynamicArrowBtnListener,
  addDynamicClickListener
};
