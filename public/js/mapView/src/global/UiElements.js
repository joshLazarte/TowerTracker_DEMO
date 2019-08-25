import { _gs } from "./GlobalState";
const _ = id => document.getElementById(id);

const UiElements = {
  //modals
  filterTowersModal: _("filterTowersModal"),
  addTowerModal: _("addTowerModal"),
  spinnerModal: _("spinner-container"),
  //alerts
  mainAlert: _("main-alert"),
  towerAlert: _("tower-form-alert"),
  filterAlert: _("filter-form-alert"),
  //general
  queueCounter: _("queue-counter"),
  toggleViewQueueButton: _("toggleViewQueueButton"),
  clearQueueButton: _("clearQueueButton"),
  getSroButton: _("getSroButton"),
  resetFilterButton: _("resetFilterButton"),
  queueList: _("queueList"),
  //Filter tower form
  searchKey: _("searchKey"),
  lastServiceFilterValue: _("lastServiceFilterValue"),
  unrestrictedValue: _("unrestrictedValue"),
  CLLIValue: _("CLLIValue"),
  CIDValue: _("CIDValue"),
  areaValue: _("areaValue"),
  accountNumberValue: _("accountNumberValue"),
  assignedTechValue: _("assignedTechValue"),
  lastServiceTechValue: _("lastServiceTechValue"),
  carrierValue: _("carrierValue"),
  cancelFilterButtonSmall: _("cancelFilterButtonSmall"),
  cancelFilterButton: _("cancelFilterButton"),
  filterSubmitButton: _("filterSubmitButton"),
  //Add tower form
  addTowerFormOpen: _("addTowerFormOpen"),
  modalTitle: _("modalTitle"),
  toggleEditMode: _("toggleEditMode"),
  lastServiceInfo: _("lastServiceInfo"),
  closeTowerFormModalSmall: _("closeTowerFormModalSmall"),
  formDataFields: {
    addTowerAcctNum: _("addTowerAcctNum"),
    addTowerCID: _("addTowerCID"),
    addTowerComments: _("addTowerComments"),
    addTowerAddress: _("addTowerAddress"),
    addTowerCity: _("addTowerCity"),
    addTowerLat: _("addTowerLat"),
    addTowerLong: _("addTowerLong"),
    addTowerCLLI: _("addTowerCLLI"),
    addTowerCabinetType: _("addTowerCabinetType"),
    addTowerCarrier: _("addTowerCarrier"),
    addTowerAssignedTech: _("addTowerAssignedTech"),
    addTowerUnrestricted: _("addTowerUnrestricted"),
    addTowerSubmit: _("addTowerSubmit")
  },
  closeTowerFormModal: _("closeTowerFormModal")
};

//Admin only UI Elements
if (_gs.isAdmin) {
  UiElements.formDataFields.addTowerMarket = _(
    "addTowerMarket"
  );
  UiElements.marketFilterValue = _("marketFilterValue");
  UiElements.adminTechSelectModal = _(
    "adminTechSelectModal"
  );
  UiElements.adminTechSelectAlert = _(
    "admin-tech-select-alert"
  );
  UiElements.cancelAdminTechSelectSmall = _(
    "cancelAdminTechSelectSmall"
  );
  UiElements.adminTechSelect = _("adminTechSelect");
  UiElements.cancelAdminTechSelect = _(
    "cancelAdminTechSelect"
  );
  UiElements.adminSROSubmitButton = _(
    "adminSROSubmitButton"
  );
}

const _ui = Object.freeze(UiElements);

export default _ui;
