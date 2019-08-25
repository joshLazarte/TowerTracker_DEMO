import { _gs } from '../global/GlobalState';
import _ui from '../global/UiElements';

const setFilterParams = (key, value) => {
    const range = _ui.lastServiceFilterValue.value;
    const filterParams = {};

    if (key) filterParams[key] = value;

    if (_gs.filterByUnrestricted) filterParams.unrestricted = true;
    if (range !== "ALL") filterParams.range = range;

    return filterParams;
};

export { setFilterParams };
