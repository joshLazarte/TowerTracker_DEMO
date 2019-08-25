import { _gs } from '../global/GlobalState';
import _ui from '../global/UiElements';
import { http } from '../libraries/http';
import validateResponse from './sroUtilities';
import insertAlert from '../alerts/insertAlert';

let spinnerDisplay = 'none';

const toggleSpinnerDisplay = () => {
  if (spinnerDisplay === 'none') {
    spinnerDisplay = 'block';
  } else {
    spinnerDisplay = 'none';
  }
  _ui.spinnerModal.style.display = spinnerDisplay;
};

const generateSros = async (towerIds, techID) => {
  if (towerIds.length === 0)
    return insertAlert(_ui.mainAlert, 'danger', 'No Towers In Queue');
  toggleSpinnerDisplay();
  _gs.infowindow && _gs.infowindow.close();
  try {
    const response = await http.post('api/email', { towerIds, techID });
    await toggleSpinnerDisplay();
    return validateResponse(response);
  } catch (err) {
    toggleSpinnerDisplay();
    return insertAlert(_ui.mainAlert, 'danger', 'Something went wrong');
  }
};

export default generateSros;
