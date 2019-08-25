import _ui from "../global/UiElements";
import { _gs } from "../global/GlobalState";
import isEmpty from "../libraries/isEmpty";
import { closeModal } from "../modal/controllerFunctions";
import { getById } from "../libraries/TowerUtilities";
import removeAlert from "../alerts/removeAlert";

const {
  addTowerAddress,
  addTowerCity,
  addTowerCLLI,
  addTowerAcctNum,
  addTowerCabinetType,
  addTowerUnrestricted,
  addTowerCarrier,
  addTowerAssignedTech,
  addTowerLat,
  addTowerLong,
  addTowerCID,
  addTowerComments,
  addTowerSubmit
} = _ui.formDataFields;

let addTowerMarket;
if (_ui.formDataFields.addTowerMarket) {
  addTowerMarket = _ui.formDataFields.addTowerMarket;
}

const sanitizeInput = input => {
  return input.replace(/'|"|`|<script>/g, "");
};

const setFieldDisabled = disabled => {
  for (let field in _ui.formDataFields) {
    _ui.formDataFields[field].disabled = disabled;
  }
};

const clearFields = () => {
  for (let field in _ui.formDataFields) {
    if (field === "addTowerUnrestricted") {
      _ui.formDataFields[field].checked = true;
    } else {
      _ui.formDataFields[field].value = "";
    }
  }
};

const getServicedDateString = tower => {
  if (!isEmpty(tower.lastServiceDate)) {
    return `Last Serviced by ${tower.lastServiceTech.firstName} - ${
      tower.lastServiceTech.techNumber
    } on ${tower.lastServiceDate}`;
  } else return null;
};

const autoPopulateFields = tower => {
  addTowerAcctNum.value = tower.accountNumber;
  addTowerAddress.value = tower.address;
  addTowerCity.value = tower.city;
  addTowerLat.value = tower.lat;
  addTowerLong.value = tower.long;
  addTowerCLLI.value = tower.CLLI;
  addTowerCabinetType.value = tower.cabinetType;
  addTowerCarrier.value = tower.carrier;
  addTowerAssignedTech.value = tower.assignedTech;
  addTowerUnrestricted.checked = tower.unrestricted;
  addTowerCID.value = tower.CID;
  if (addTowerMarket) addTowerMarket.value = tower.market;
  addTowerComments.value = tower.comments;
  _ui.lastServiceInfo.textContent = getServicedDateString(tower);
};

const openEditTowerModal = async tower => {
  const towerToShow = await getById(_gs.CellTowers, tower);
  autoPopulateFields(towerToShow);
  setFieldDisabled(true);
  _ui.modalTitle.textContent = "View Details";
  _ui.toggleEditMode.style.display = "inline";
  addTowerSubmit.textContent = "Update";
  _gs.towerPendingUpdate = tower;
};

const clearTowerForm = e => {
  e.preventDefault();
  clearFields();
  _gs.towerFormEditState = false;
  setFieldDisabled(false);
  addTowerSubmit.textContent = "Add";
  _ui.toggleEditMode.style.display = "none";
  _ui.modalTitle.textContent = "Add Tower";
  _ui.toggleEditMode.textContent = "Edit";
  _ui.lastServiceInfo.textContent = "";
  _gs.towerPendingUpdate = null;
  closeModal(_ui.addTowerModal);
  removeAlert(_ui.towerAlert);
};

export { sanitizeInput, openEditTowerModal, clearTowerForm, setFieldDisabled };
