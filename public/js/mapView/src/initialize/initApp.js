import { _gs } from '../global/GlobalState';
import _ui from '../global/UiElements';
import { http } from '../libraries/http';
import createMap from '../map/createMap';
import { addMarkerToTower } from '../map/marker';
import { getDateRange } from '../libraries/dateRange';
import loadMapScript from '../map/loadMapScript';
import insertAlert from '../alerts/insertAlert';

const getTowers = async () => {
  _gs.CellTowers = await http.get('api/towers');
};

const addAdditionalTowerProps = () => {
  _gs.CellTowers.forEach((tower, index) => {
    tower.range = getDateRange(tower.lastServiceDate);
    tower.index = index;
    addMarkerToTower(tower);
  });
};

const initApp = async () => {
  try {
    await loadMapScript();
    await getTowers();
    createMap(_gs.CellTowers);
    addAdditionalTowerProps();
  } catch (error) {
    console.log(error);
    insertAlert(_ui.mainAlert, 'danger', 'App is down... try again later');
  }
};

export default initApp;
