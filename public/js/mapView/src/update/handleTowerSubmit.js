import _ui from '../global/UiElements';
import { zoomIn, panMap } from '../map/changeView';
import { http } from '../libraries/http';
import { _gs } from '../global/GlobalState';
import getFormErrors from './formValidation';
import { getById } from '../libraries/TowerUtilities';
import { clearTowerForm } from './formFieldUtilities';
import { updateTower, addTower, addUnRequiredProperties } from './towerActions';
import insertAlert from '../alerts/insertAlert';
import verifyLoggedIn from '../auth/logout';

const {
  addTowerAddress,
  addTowerCity,
  addTowerCLLI,
  addTowerAcctNum,
  addTowerUnrestricted,
  addTowerCarrier,
  addTowerAssignedTech,
  addTowerLat,
  addTowerLong,
  addTowerCID
} = _ui.formDataFields;

let addTowerMarket;
if (_ui.formDataFields.addTowerMarket) {
  addTowerMarket = _ui.formDataFields.addTowerMarket;
}

const handleTowerSubmit = async e => {
  e.preventDefault();
  const towerData = {
    address: addTowerAddress.value,
    city: addTowerCity.value,
    CLLI: addTowerCLLI.value,
    accountNumber: addTowerAcctNum.value,
    unrestricted: addTowerUnrestricted.checked ? true : false,
    carrier: addTowerCarrier.value,
    assignedTech: addTowerAssignedTech.value,
    lat: Number(addTowerLat.value),
    long: Number(addTowerLong.value),
    CID: addTowerCID.value
  };

  if (addTowerMarket) towerData.market = addTowerMarket.value;

  const error = getFormErrors(towerData);
  if (error) return insertAlert(_ui.towerAlert, 'danger', error);

  addUnRequiredProperties(towerData);

  try {
    const incommingTower = await http.post('api/towers', towerData);

    if (incommingTower.status === '405') {
      clearTowerForm(e);
      return insertAlert(_ui.mainAlert, 'danger', incommingTower.error);
    }

    const existingTower = await getById(_gs.CellTowers, incommingTower._id);
    verifyLoggedIn(incommingTower);

    existingTower
      ? updateTower(existingTower, incommingTower)
      : addTower(incommingTower);

    clearTowerForm(e);
    panMap(incommingTower.lat, incommingTower.long);
    zoomIn();
  } catch (err) {
    _gs.towerPendingUpdate = null;
    return insertAlert(_ui.towerAlert, 'danger', 'Something Went Wrong...');
  }
};

export default handleTowerSubmit;
