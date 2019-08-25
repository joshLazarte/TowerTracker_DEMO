import { _gs } from "../global/GlobalState";
import _ui from "../global/UiElements";
import { closeModal } from "../modal/controllerFunctions";
import removeAlert from "../alerts/removeAlert";

const formFields = [
  _ui.CIDValue,
  _ui.CLLIValue,
  _ui.accountNumberValue,
  _ui.assignedTechValue,
  _ui.lastServiceTechValue,
  _ui.areaValue,
  _ui.carrierValue
];

const resetFormFieldsExcept = dontResetValue => {
  formFields.forEach(field => {
    if (field !== dontResetValue) {
      field.style.display = "none";
      field.value = "";
    }
  });
};

const resetMarketFilterField = () => {
  _ui.marketFilterValue.value = "ALL";
};

const resetEntireForm = () => {
  resetFormFieldsExcept(null);
  _ui.searchKey.value = "";
  _ui.unrestrictedValue.checked = false;
  _gs.filterByUnrestricted = false;
  _ui.lastServiceFilterValue.value = "ALL";
  _ui.marketFilterValue && resetMarketFilterField();
  closeModal(_ui.filterTowersModal);
  removeAlert(_ui.filterAlert);
};

const showField = field => {
  field.style.display = "block";
};

const showAppropriateFormField = searchKey => {
  switch (searchKey) {
    case "":
      resetFormFieldsExcept(null);
      break;
    case "CLLI":
      showField(_ui.CLLIValue);
      resetFormFieldsExcept(_ui.CLLIValue);
      break;
    case "CID":
      showField(_ui.CIDValue);
      resetFormFieldsExcept(_ui.CIDValue);
      break;
    case "carrier":
      showField(_ui.carrierValue);
      resetFormFieldsExcept(_ui.carrierValue);
      break;
    case "area":
      showField(_ui.areaValue);
      resetFormFieldsExcept(_ui.areaValue);
      break;
    case "accountNumber":
      showField(_ui.accountNumberValue);
      resetFormFieldsExcept(_ui.accountNumberValue);
      break;
    case "assignedTech":
      showField(_ui.assignedTechValue);
      resetFormFieldsExcept(_ui.assignedTechValue);
      break;
    case "lastServiceTech":
      showField(_ui.lastServiceTechValue);
      resetFormFieldsExcept(_ui.lastServiceTechValue);
      break;
  }
};

export { resetEntireForm, showAppropriateFormField };
