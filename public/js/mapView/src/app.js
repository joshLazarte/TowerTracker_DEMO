import LoadEventListeners from "./global/LoadEventListeners";
import { addItemToQueue, removeItemFromQueue } from "./queue/queueActions";
import { updateCounter } from "./queue/queueUtilities";
import { openEditTowerModal } from "./update/formFieldUtilities";
import initApp from "./initialize/initApp";

//Add functions to window object to work within template literals
window.addItemToQueue = addItemToQueue;
window.removeItemFromQueue = removeItemFromQueue;
window.openEditTowerModal = openEditTowerModal;

//initialize the app
initApp();

//set initial queue counter
updateCounter();

//load all other event listeners
LoadEventListeners();
