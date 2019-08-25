const _ = id => document.getElementById(id);

const elements = {
  marketFormHeader: _("market-form-header"),
  hiddenIdField: _("hidden-id"),
  displayInEditState: document.querySelectorAll(".display-in-edit-state"),
  editStateAddAreaBtn: _("edit-state-add-area-button"),
  areaFormSection: _("add-area-form-section"),
  marketName: _("market-name"),
  areafields: _("area_fields"),
  addAreaButton: _("addArea"),
  savedAreasHeader: _("saved-areas-header"),
  savedAreas: _("saved-areas"),
  toggleSavedAreaBtn: _("toggle-saved-area-display"),
  savedAreaCount: _("saved-area-count"),
  marketAlert: _("market-alert"),
  editMarketButtons: document.querySelectorAll(".edit-market-button"),
  toggleCompletionButton: _("toggle-completion-button"),
  cancelEditMarketBtn: _("cancel-edit-market-button"),
  submitButton: _("add-market-submit"),

  dynamicElements: {
    areaGroup: _("area-group-0"),
    areaName: _("area-name-0"),
    citiesContainer: _("area-0-cities-section"),
    areaCities: [_("area-0-city-0"), _("area-0-city-1"), _("area-0-city-2")],
    addCitiesBtn: _("area-0-add-cities")
  },

  savedAreaElements: [],

  updateDynamicElements: areaCount => {
    const { dynamicElements } = _ui;
    dynamicElements.areaGroup = _(`area-group-${areaCount}`);
    dynamicElements.areaName = _(`area-name-${areaCount}`);
    (dynamicElements.citiesContainer = _(`area-${areaCount}-cities-section`)),
    (dynamicElements.areaCities = [
      _(`area-${areaCount}-city-0`),
      _(`area-${areaCount}-city-1`),
      _(`area-${areaCount}-city-2`)
    ]);
    dynamicElements.addCitiesBtn = _(`area-${areaCount}-add-cities`);
  },

  pushAdditionalCities: (target, areaCount, cityCount) => {
    for (let i = cityCount; i < cityCount + 3; i++) {
      target.push(_(`area-${areaCount}-city-${i}`));
    }
  },

  updateSavedAreaElements: areaCount => {
    _ui.savedAreaElements.push({
      nameField: _(`saved-area-name-${areaCount}`),
      savedAreaAlert: _(`saved-area-${areaCount}-alert`),
      citiesSection: _(`saved-cities-section-${areaCount}`),
      citiesList: _(`saved-cities-list-${areaCount}`),
      areaCities: [
        ...document.querySelectorAll(`.saved-city-area-${areaCount}`)
      ],
      arrowButton: _(`arrow-button-${areaCount}`),
      savedAddCities: _(`saved-area-${areaCount}-add-cities`)
    });
  },

  clearSavedAreaElements: () => {
    _ui.savedAreaElements.length = 0;
  },

  getDynamicElementById: id => _(id)
};

const _ui = Object.freeze(elements);

export default _ui;
