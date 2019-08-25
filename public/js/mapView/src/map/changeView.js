import { _gs } from '../global/GlobalState';
import { hideAllMarkers, showMarker } from './marker.js';

const zoomOut = () => {
    _gs.map.setZoom(8);
};

const zoomIn = () => {
    _gs.map.setZoom(12);
};

const panMap = (lat, lng) => {
    _gs.map.panTo(new google.maps.LatLng(lat, lng));
};

const showFilteredMap = (towers) => {
    hideAllMarkers();
    towers.forEach(tower => showMarker(tower.marker));
    panMap(towers[0].lat, towers[0].long);
    zoomOut();
};

export {
    zoomOut,
    zoomIn,
    panMap,
    showFilteredMap
};