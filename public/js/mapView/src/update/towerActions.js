import { _gs } from '../global/GlobalState';
import _ui from '../global/UiElements';
import isEmpty from '../libraries/isEmpty';
import { addMarkerToTower, removeMarkerFromTower } from '../map/marker';
import { getDateRange } from '../libraries/dateRange.js';
import { sanitizeInput } from './formFieldUtilities.js';

const {
    addTowerCabinetType,
    addTowerComments,
} = _ui.formDataFields;

const updateTower = (existing, incomming) => {
    removeMarkerFromTower(existing);
    incomming.range = getDateRange(incomming.lastServiceDate);
    incomming.index = incomming.index;
    addMarkerToTower(incomming);
    _gs.CellTowers.splice(existing.index, 1, incomming);
};

const addTower = (tower) => {
    tower.index = _gs.CellTowers.length;
    tower.range = getDateRange(tower.lastServiceDate);
    addMarkerToTower(tower);
    _gs.CellTowers.push(tower);
};

const addUnRequiredProperties = (towerData) => {
    if(_gs.towerPendingUpdate) towerData._id = _gs.towerPendingUpdate;
    if(!isEmpty(addTowerCabinetType.value)) towerData.cabinetType = addTowerCabinetType.value;
    towerData.comments = sanitizeInput(addTowerComments.value);
};

export { updateTower, addTower, addUnRequiredProperties };