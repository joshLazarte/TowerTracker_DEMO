import { resetEntireForm } from './formFieldUtilities';
import { showAllMarkers } from '../map/marker';
import { zoomOut } from '../map/changeView';
import verifyLoggedIn from '../auth/logout';
import { http } from '../libraries/http';

const handleFilterReset = async () => {
  showAllMarkers();
  resetEntireForm();
  const res = await http.post('api/excel/filter-params', {});
  verifyLoggedIn(res);
  zoomOut();
};

export default handleFilterReset;
