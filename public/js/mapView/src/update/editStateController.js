import _ui from '../global/UiElements';
import { _gs } from '../global/GlobalState';
import { setFieldDisabled } from './formFieldUtilities';

const setEditState = (editBool) => {
    if(editBool) {
        _ui.modalTitle.textContent = 'Edit Tower';
        _ui.toggleEditMode.textContent = "Exit Edit Mode";
        setFieldDisabled(false);
    } else {
        _ui.modalTitle.textContent = 'View Details';
        _ui.toggleEditMode.textContent = "Edit";
        setFieldDisabled(true);
    }
};

const toggleEditMode = (e) => {
    e.preventDefault();
    _gs.towerFormEditState = !_gs.towerFormEditState;
    setEditState(_gs.towerFormEditState);
};

export { setEditState, toggleEditMode };