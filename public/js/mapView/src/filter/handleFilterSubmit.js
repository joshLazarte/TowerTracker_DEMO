import isEmpty from '../libraries/isEmpty';
import { showFilteredMap } from '../map/changeView';
import _ui from '../global/UiElements';
import { _gs } from '../global/GlobalState';
import { getSearchValue, getInitialArray, getFinalArray } from './getValues';
import { setFilterParams } from './filterParams';
import { resetEntireForm } from './formFieldUtilities';
import { getBySingleValue } from '../libraries/TowerUtilities';
import insertAlert from '../alerts/insertAlert';
import verifyLoggedIn from '../auth/logout';
import { http } from '../libraries/http';

const formIsNotValid = searchValue => {
  return !isEmpty(_ui.searchKey.value) && isEmpty(searchValue);
};

const handleFilterSubmit = async e => {
  e.preventDefault();
  try {
    const searchValue = getSearchValue();
    if (formIsNotValid(searchValue))
      return insertAlert(
        _ui.filterAlert,
        'danger',
        'Please choose filter criteria'
      );

    const filterParams = setFilterParams(_ui.searchKey.value, searchValue[0]);
    let preliminaryArray = _gs.CellTowers;

    if (_ui.marketFilterValue) {
      if (_ui.marketFilterValue.value !== 'ALL') {
        filterParams.market = _ui.marketFilterValue.value;
        preliminaryArray = await getBySingleValue(_gs.CellTowers, {
          market: _ui.marketFilterValue.value
        });
      }
    }

    const initialArray = await getInitialArray(
      preliminaryArray,
      searchValue[0]
    );

    const finalArray = await getFinalArray(initialArray);

    if (isEmpty(finalArray))
      return insertAlert(
        _ui.filterAlert,
        'danger',
        'No Towers Matched Your Search'
      );

    const res = await http.post('api/excel/filter-params', filterParams);

    verifyLoggedIn(res);

    showFilteredMap(finalArray);
    resetEntireForm();
  } catch (error) {
    console.log(error);
    return insertAlert(
      _ui.filterAlert,
      'danger',
      'Server Error... try again later'
    );
  }
};

export default handleFilterSubmit;
