const isEmpty = require('./isEmpty');
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

const dateUtilities = {
    getFormattedDate: () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();
        const date = `${month}/${day}/${year}`;
        return date;
    },
    getDateRange: (date) => {
        if(isEmpty(date)) {
            return "BAD";
        } else if(isInGoodRange(date)) {
            return 'GOOD';
        } else if(isInWarningRange(date)){
            return 'WARNING';
        } else {
            return "BAD";
        }
    },
    filterRange: (range, towers) => {
      let result;
      if(!range) result = towers;
      switch(range){
        case "GOOD":
          result = towers.filter(tower => dateUtilities.getDateRange(tower.lastServiceDate) === "GOOD");
          break;
        case "WARNING":
          result = towers.filter(tower => dateUtilities.getDateRange(tower.lastServiceDate) === "WARNING");
          break;
        case "BAD":
          result = towers.filter(tower => dateUtilities.getDateRange(tower.lastServiceDate) === "BAD");
          break;
      }
      return result;
    }
};


module.exports = dateUtilities;