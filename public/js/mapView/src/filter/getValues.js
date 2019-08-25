import isEmpty from "../libraries/isEmpty";
import { _gs } from "../global/GlobalState";
import _ui from "../global/UiElements";
import { getBySingleValue } from "../libraries/TowerUtilities";

const getSearchValue = () => {
  const searchValueOptions = [
    _ui.CLLIValue.value.toUpperCase(),
    _ui.CIDValue.value,
    _ui.areaValue.value,
    _ui.accountNumberValue.value,
    _ui.assignedTechValue.value,
    _ui.lastServiceTechValue.value,
    _ui.carrierValue.value
  ];

  return searchValueOptions
    .map(option => option.trim())
    .filter(option => !isEmpty(option));
};

const getInitialArray = async (array, searchValue) => {
  if (isEmpty(searchValue)) return array;
  return await getBySingleValue(array, { [_ui.searchKey.value]: searchValue });
};

const getFinalArray = async initialArray => {
  const range = _ui.lastServiceFilterValue.value;
  let finalArray = initialArray;
  if (_gs.filterByUnrestricted)
    finalArray = await getBySingleValue(initialArray, { unrestricted: true });
  if (range !== "ALL")
    finalArray = await getBySingleValue(finalArray, { range });
  if (finalArray.length === _gs.CellTowers.length) finalArray = [];
  return finalArray;
};

export { getSearchValue, getInitialArray, getFinalArray };
