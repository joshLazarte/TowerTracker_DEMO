import { _gs } from "../global/GlobalState";
import _ui from "../global/UiElements";
import {
  updateCounter,
  alreadyAdded,
  createQueueListItem,
  hideQueue,
  showQueue,
  queueIsVisible
} from "./queueUtilities";
import { getById } from "../libraries/TowerUtilities";
import insertAlert from "../alerts/insertAlert";

const toggleQueueVisibility = () => {
  if (_gs.queue.length === 0)
    return insertAlert(_ui.mainAlert, "danger", "No Towers In Queue");
  queueIsVisible() ? hideQueue() : showQueue();
};

const clearQueue = () => {
  _gs.queue.splice(0, _gs.queue.length);
  _ui.queueList.innerHTML = "";
  hideQueue();
  updateCounter();
};

const removeItemFromQueue = id => {
  _gs.queue = _gs.queue.filter(item => item._id !== id);
  updateCounter();
  _ui.queueList.removeChild(document.getElementById(id));
  _gs.queue.length === 0 && hideQueue();
};

const addItemToQueue = async id => {
  const ids = _gs.queue.map(item => item._id);
  const tower = await getById(_gs.CellTowers, id);
  if (alreadyAdded(ids, id)) {
    _gs.infowindow.close();
    return insertAlert(
      _ui.mainAlert,
      "danger",
      "That Tower is Already in Your Queue"
    );
  }

  _gs.queue.push(tower);
  updateCounter();
  const li = createQueueListItem(tower);
  _ui.queueList.appendChild(li);
  _gs.infowindow.close();
};

export {
  toggleQueueVisibility,
  clearQueue,
  removeItemFromQueue,
  addItemToQueue
};
