import loadEventListeners from "./eventListeners";

const viewCtrl = (dataCtrl, marketCtrl, techCtrl) => {
  loadEventListeners(dataCtrl, marketCtrl, techCtrl);
};

export default viewCtrl;
