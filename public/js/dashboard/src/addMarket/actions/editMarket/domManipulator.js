import _ui from "../../uiElements";
import dom from '../domUtilities';
import { getHTML } from "../../templates";

const DM = {
  hideEditStateElements: (shouldHide) => {
    [..._ui.displayInEditState].forEach(el => {
      dom.toggleDisplay(el, shouldHide);
    });
  },

  appendAdditionalFields: () => {
    const content = getHTML(0);
    dom.insertContent(content, _ui.areafields);
  },

  setEditStateContent: (name, id) => {
    _ui.hiddenIdField.value = id;
    _ui.marketFormHeader.textContent = `Edit ${name} Market`;
    _ui.marketName.value = name;
    DM.hideEditStateElements(false);
    dom.toggleDisplay(_ui.cancelEditMarketBtn, false);
    dom.toggleDisplay(_ui.areaFormSection, true);
    dom.toggleVisibility(_ui.savedAreas, true);
    dom.toggleContent(
      _ui.toggleSavedAreaBtn,
      true,
      "Hide All",
      "See All"
    );
  },

  editStateShowAddArea: () => {
    DM.hideEditStateElements(true);
    dom.toggleDisplay(_ui.areaFormSection, false);
  },

  removeCompletionState: () => {
    dom.toggleDisplay(_ui.submitButton, true);
    dom.toggleClass(
      _ui.toggleCompletionButton,
      false,
      "btn-warning",
      "btn-success"
    );
    dom.toggleContent(
      _ui.toggleCompletionButton,
      false,
      "Go Back",
      "Done"
    );
    dom.toggleContent(
      _ui.toggleSavedAreaBtn,
      false,
      "Hide All",
      "See All"
    );
  },

  clearMarketContent: () => {
    DM.hideEditStateElements(true);
    _ui.hiddenIdField.value = '';
    _ui.marketFormHeader.textContent = 'Add Market';
    _ui.marketName.value = '';
    dom.toggleDisplay(_ui.cancelEditMarketBtn, true);
    dom.toggleDisplay(_ui.savedAreasHeader, true);
    _ui.savedAreas.innerHTML = '';
    dom.toggleDisplay(_ui.savedAreas, true);
    dom.toggleVisibility(_ui.savedAreas, false);
    dom.toggleDisplay(_ui.areaFormSection, false);
    _ui.areafields.innerHTML = '';
    DM.appendAdditionalFields();
    dom.toggleDisplay(_ui.savedAreas, false);
    DM.removeCompletionState(false);
  }
};

export default DM;
