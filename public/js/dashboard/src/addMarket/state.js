const _state = {
  areaCount: 0,
  cityCount: 0,
  savedAreaData: [],
  formCompleted: false,

  updater: {
    updateAreaCount: () => {
      _state.areaCount += 1;
    },

    updateCityCount: () => {
      _state.cityCount += 3;
    },

    resetCityCount: () => {
      _state.cityCount = 0;
    },

    resetAreaCount: () => {
      _state.areaCount = 0;
    },

    resetSavedAreaData: () => {
      _state.savedAreaData = [];
    },

    resetAll: () => {
      _state.updater.resetCityCount();
      _state.updater.resetAreaCount();
      _state.updater.resetSavedAreaData();
      _state.formCompleted = false;
    },

    addSavedAreaData: (obj) => {
      _state.savedAreaData.push(obj);
    },

    updateSavedAreaCityCount: (index) => {
      _state.savedAreaData[index].cityCount += 3;
    },
  }
};

export default _state;
