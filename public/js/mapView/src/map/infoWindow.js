import { _gs } from '../global/GlobalState';

const createContentString = tower => {
    return `
        <ul style="font-size: .8rem;" class="list-group list-group-flush mb-3">
            <li class="list-group-item"><strong>Address:</strong> ${tower.address}</li>
            <li class="list-group-item"><strong>CLLI:</strong> ${tower.CLLI}</li>
            <li class="list-group-item"><strong>CID:</strong> ${tower.CID}</li>
            <li class="list-group-item"><strong>Unrestricted Access:</strong> ${tower.unrestricted ? 'YES' : 'NO'}</li>
        </ul>
        <div class="text-center">
            <button 
                style="font-size: .8rem;" 
                class="btn btn-warning btn-sm mr-1 mb-2" 
                data-toggle="modal" data-target="#addTowerModal" 
                onclick='openEditTowerModal("${tower._id}")'>
                    View/Edit
            </button>
            <button 
                style="font-size: .8rem;"
                class="btn btn-primary btn-sm mb-2" 
                onclick='addItemToQueue("${tower._id}")'>
                    Add to Queue
            </button>
        <div>    
    `;
};

const createWindow = (content, marker) => {
    _gs.infowindow = new google.maps.InfoWindow({ content });
    _gs.infowindow.open(_gs.map, marker);
};

export { createContentString, createWindow };