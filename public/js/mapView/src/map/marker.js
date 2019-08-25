import { _gs } from '../global/GlobalState';
import { createContentString, createWindow } from './infoWindow';

const removeMarkerFromTower = tower => {
  tower.marker.setMap(null);
  tower.marker = null;
};

const hideMarker = marker => {
  marker.setMap(null);
};

const showMarker = marker => {
  marker.setMap(_gs.map);
};

const hideAllMarkers = () => {
  _gs.CellTowers.forEach(tower => {
    hideMarker(tower.marker);
  });
};

const showAllMarkers = () => {
  _gs.CellTowers.forEach(tower => {
    showMarker(tower.marker);
  });
};

const getAppropriateIcon = range => {
  switch (range) {
    case 'GOOD':
      return { url: 'icons/green_marker.svg' };
    case 'WARNING':
      return { url: 'icons/orange_marker.svg' };
    default:
      return { url: 'icons/red_marker.svg' };
  }
};

const addMarkerToTower = tower => {
  const contentString = createContentString(tower);
  tower.marker = new google.maps.Marker({
    position: { lat: tower.lat, lng: tower.long },
    map: _gs.map,
    icon: getAppropriateIcon(tower.range),
    title: tower.address
  });

  tower.marker.addListener('click', () => {
    _gs.infowindow && _gs.infowindow.close();
    createWindow(contentString, tower.marker);
  });
};

export {
  removeMarkerFromTower,
  hideMarker,
  showMarker,
  hideAllMarkers,
  showAllMarkers,
  addMarkerToTower
};
