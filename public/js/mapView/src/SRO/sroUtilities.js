import { clearQueue } from '../queue/queueActions';
import insertAlert from '../alerts/insertAlert';
import _ui from '../global/UiElements';
import verifyLoggedIn from '../auth/logout';

const validateResponse = async res => {
  if (res.status === '405') {
    return insertAlert(_ui.mainAlert, 'danger', res.error);
  }

  verifyLoggedIn(res);
  insertAlert(_ui.mainAlert, 'success', res.msg);
  clearQueue();
};

export default validateResponse;
