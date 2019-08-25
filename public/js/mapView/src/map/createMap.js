import { _gs } from "../global/GlobalState";

const createMap = towers => {
  const noTowers = towers.length === 0 ? true : false;
  _gs.map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: noTowers ? 32.392639 : towers[0].lat,
      lng: noTowers ? -99.052681 : towers[0].long
    },
    gestureHandling: "greedy",
    zoom: noTowers ? 4 : 8
  });
};

export default createMap;
