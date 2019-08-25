import {
  getHTML,
  getSavedAreaGroup,
  getAdditionalCitiesRow
}
from "../../templates";
import dom from "../domUtilities";
import _state from "../../state";
import _ui from "../../uiElements";
import validator from "../validator";
const { areafields, dynamicElements } = _ui;

const DM = {
  appendAdditionalFields: () => {
    const content = getHTML(_state.areaCount);
    dom.insertContent(content, areafields);
  },

  setSavedAreaHeader: () => {
    dom.toggleDisplay(_ui.savedAreasHeader, false);
    _ui.savedAreaCount.textContent = _state.areaCount + 1;
  },

  appendSavedArea: () => {
    const { name, cities } = validator.getCurrentFormValues();
    const content = getSavedAreaGroup(name, cities, _state.areaCount);
    dom.insertContent(content, _ui.savedAreas);
  },

  appendAdditionalCitiesRow: (target, areaCount, cityCount) => {
    const content = getAdditionalCitiesRow(areaCount, cityCount);
    dom.insertContent(content, target);
  },

  removeOldFields: () => {
    dynamicElements.areaGroup.remove();
  },

  styleSavedAreas: (nameField, citiesSection) => {
    nameField.readOnly = true;
    dom.toggleVisibility(citiesSection, false);
  },

  collapseAllCities: () => {
    _ui.savedAreaElements.forEach(obj => {
      DM.styleSavedAreas(obj.nameField, obj.citiesSection);
      dom.toggleClass(
        obj.arrowButton.firstElementChild,
        true,
        "fa-caret-down",
        "fa-caret-up"
      );
    });
  },

  hideEditStateElements: () => {
    [..._ui.displayInEditState].forEach(el => {
      dom.toggleDisplay(el, true);
    });
  },

  toggleSavedAreasDisplay: btn => {
    dom.toggleVisibility(
      _ui.savedAreas,
      _ui.savedAreas.style.visibility === "hidden"
    );
    DM.collapseAllCities();
    dom.toggleContent(
      btn,
      btn.textContent === "See All",
      "Hide All",
      "See All"
    );
  },

  toggleNameFieldDisabled: nameField => {
    nameField.readOnly = !nameField.readOnly;
  },

  toggleCitiesDisplay: cities => {
    dom.toggleVisibility(cities, cities.style.visibility === "hidden");
  },

  toggleArrowButtonContent: count => {
    const arrow = _ui.savedAreaElements[count].arrowButton.firstElementChild;
    dom.toggleClass(
      arrow,
      arrow.classList.contains("fa-caret-down"),
      "fa-caret-up",
      "fa-caret-down"
    );
  },

  toggleCompletionState: isCompleted => {
    DM.hideEditStateElements();
    dom.toggleDisplay(_ui.areaFormSection, isCompleted);
    dom.toggleDisplay(_ui.submitButton, !isCompleted);
    dom.toggleClass(
      _ui.toggleCompletionButton,
      isCompleted,
      "btn-warning",
      "btn-success"
    );
    dom.toggleContent(
      _ui.toggleCompletionButton,
      isCompleted,
      "Go Back",
      "Done"
    );
    DM.collapseAllCities();
    dom.toggleVisibility(_ui.savedAreas, isCompleted);
    dom.toggleContent(
      _ui.toggleSavedAreaBtn,
      isCompleted,
      "Hide All",
      "See All"
    );
  }
};

export default DM;
