import { showModal, closeModal } from "../modal/controllerFunctions";
import { _gs } from "../global/GlobalState";
import _ui from "../global/UiElements";
import insertAlert from "../alerts/insertAlert";
import removeAlert from "../alerts/removeAlert";
import isEmpty from "../libraries/isEmpty";
import generateSros from "./getSRO";

const showAdminTechSelect = () => {
  if (_gs.queue.length === 0)
    return insertAlert(_ui.mainAlert, "danger", "No Towers In Queue");
  showModal(_ui.adminTechSelectModal);
};

const resetAdminTechSelect = () => {
  _ui.adminTechSelect.value = "";
  removeAlert(_ui.adminTechSelectAlert);
  closeModal(_ui.adminTechSelectModal);
};

const handleAdminSROSubmit = e => {
  e.preventDefault();
  if (isEmpty(_ui.adminTechSelect.value))
    return insertAlert(
      _ui.adminTechSelectAlert,
      "danger",
      "Select a Tech to Assign SRO's"
    );

  generateSros(_gs.queue.map(tower => tower._id), _ui.adminTechSelect.value);
  resetAdminTechSelect();
};

export { showAdminTechSelect, resetAdminTechSelect, handleAdminSROSubmit };
