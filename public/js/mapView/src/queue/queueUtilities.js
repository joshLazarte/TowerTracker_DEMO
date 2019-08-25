import { _gs } from '../global/GlobalState';
import _ui from '../global/UiElements';

const updateCounter = () => {
     _ui.queueCounter.textContent = `Towers in Queue: ${_gs.queue.length}`;
};

const queueIsVisible = () => {
    return _ui.queueList.style.display === 'block';
};

const alreadyAdded = (array, item) => {
    return array.indexOf(item) !== -1;
};

const setLiContent = tower => {
    return  `<span>
        ${tower.address}, 
        ${tower.city.toUpperCase()}, 
        ${tower.accountNumber} 
        </span>
        <button 
        onclick="removeItemFromQueue('${tower._id}')" 
        style="font-size: 1.5rem;" 
        class="btn btn-danger rounded-0 align-self-stretch">
            &times;
        </button>
    `;
};

const createQueueListItem = tower => {
    const li = document.createElement('li');
    li.id = `${tower._id}`;
    li.innerHTML = setLiContent(tower);
    li.className = "list-group-item py-0 pr-0 d-flex justify-content-between align-items-center";
    return li;
};

const hideQueue = () => {
    _ui.queueList.style.display = 'none';
    _ui.toggleViewQueueButton.textContent = 'View Queue';
};

const showQueue = () => {
    _ui.queueList.style.display = 'block';
    _ui.toggleViewQueueButton.textContent = 'Hide Queue';
};



export { 
    updateCounter, 
    alreadyAdded, 
    createQueueListItem, 
    hideQueue, 
    showQueue,
    queueIsVisible
};