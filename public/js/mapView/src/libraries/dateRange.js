import isEmpty from './isEmpty';
const today = new Date(new Date().toDateString()).valueOf();

const isInGoodRange = (date) => {
  const diff = today - new Date(date).valueOf();
  return diff <= 2592000000;
};

const isInWarningRange = (date) => {
  const diff = today - new Date(date).valueOf();
  return diff > 2592000000 && diff <= 7776000000;
};

const isInBadRange = (date) => {
  const diff = today - new Date(date).valueOf();
  return diff > 7776000000;
};

const getDateRange = (date) => {
    
    if(isEmpty(date)) {
        return "BAD";
    } else if(isInGoodRange(date)) {
        return 'GOOD';
    } else if(isInWarningRange(date)){
        return 'WARNING';
    } else {
        return "BAD";
    }
};

export { getDateRange };