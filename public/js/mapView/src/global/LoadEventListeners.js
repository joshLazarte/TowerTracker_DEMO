import { _gs } from "./GlobalState";
import _ui from "./UiElements";
import generateSros from "../SRO/getSRO";
import {
  showAdminTechSelect,
  resetAdminTechSelect,
  handleAdminSROSubmit
} from "../SRO/adminSelectFormCtrl";
import { toggleQueueVisibility, clearQueue } from "../queue/queueActions";
import handleFilterSubmit from "../filter/handleFilterSubmit";
import handleFilterReset from "../filter/handleFilterReset";
import {
  resetEntireForm,
  showAppropriateFormField
} from "../filter/formFieldUtilities";
import handleTowerSubmit from "../update/handleTowerSubmit";
import { toggleEditMode } from "../update/editStateController";
import { clearTowerForm } from "../update/formFieldUtilities";

const LoadEventListeners = () => {
  if (_gs.isAdmin) {
    [_ui.cancelAdminTechSelect, _ui.cancelAdminTechSelectSmall].forEach(btn => {
      btn.addEventListener("click", () => resetAdminTechSelect());
    });

    _ui.adminSROSubmitButton.addEventListener("click", e =>
      handleAdminSROSubmit(e)
    );
  }

  _ui.toggleViewQueueButton.addEventListener("click", () =>
    toggleQueueVisibility()
  );

  _ui.clearQueueButton.addEventListener("click", () => clearQueue());

  _ui.getSroButton.addEventListener("click", () => {
    _gs.isAdmin
      ? showAdminTechSelect()
      : generateSros(_gs.queue.map(tower => tower._id), null);
  });

  _ui.resetFilterButton.addEventListener("click", () => handleFilterReset());

  _ui.unrestrictedValue.addEventListener(
    "click",
    () => (_gs.filterByUnrestricted = !_gs.filterByUnrestricted)
  );

  _ui.searchKey.onchange = () => showAppropriateFormField(_ui.searchKey.value);

  _ui.cancelFilterButton.addEventListener("click", () => resetEntireForm());

  _ui.cancelFilterButtonSmall.addEventListener("click", () =>
    resetEntireForm()
  );

  _ui.filterSubmitButton.addEventListener("click", e => handleFilterSubmit(e));

  _ui.formDataFields.addTowerSubmit.addEventListener("click", e =>
    handleTowerSubmit(e)
  );

  _ui.toggleEditMode.addEventListener("click", e => toggleEditMode(e));

  _ui.closeTowerFormModal.addEventListener("click", e => clearTowerForm(e));

  _ui.closeTowerFormModalSmall.addEventListener("click", e =>
    clearTowerForm(e)
  );
};

export default LoadEventListeners;
