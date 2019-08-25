import isEmpty from '../libraries/isEmpty';

const patterns = {
  accountNumber: /^(1234)\d{12}$/, //DEMO MODE ONLY
  lat: /^([1-9]\d)\.\d{2,}$/,
  long: /^(-[1-9]\d)\.\d{2,}$/,
  CLLI: /^[A-Z0-9]{11}$/,
  CID: /^\d{2}\.([A-Z0-9]){4}\.(\d){6}\.\.ABCD$/ //DEMO MODE ONLY
};

const errors = {
  accountNumber: 'Enter a valid Account Number',
  lat: 'Enter a valid Latitude',
  long: 'Enter a valid Longitude',
  CLLI: 'Enter a valid CLLI',
  CID: 'Enter a valid CID',
  blankInput: 'Please fill out all fields'
};

const matchPattern = (input, pattern) => pattern.test(input);

const getInputErrors = data => {
  const keys = Object.keys(data);
  for (let key of keys) {
    if (!matchPattern(data[key], patterns[key])) {
      return errors[key];
    }
  }
};

const getSelectErrors = data => {
  const keys = Object.keys(data);
  for (let key of keys) {
    if (isEmpty(data[key])) {
      return errors.blankInput;
    }
  }
};

const getFormErrors = towerData => {
  const selectErrors = getSelectErrors(towerData);
  if (!isEmpty(selectErrors)) return selectErrors;

  const formInputs = {
    accountNumber: towerData.accountNumber,
    lat: towerData.lat,
    long: towerData.long,
    CLLI: towerData.CLLI,
    CID: towerData.CID
  };

  const inputErrors = getInputErrors(formInputs);
  if (!isEmpty(inputErrors)) return inputErrors;

  return null;
};

export default getFormErrors;
