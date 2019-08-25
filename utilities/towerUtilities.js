const indexUtilities = require('./indexUtilities');
const { getRandomIndices } = indexUtilities;

const towerUtilities = {
    
    getTowersByCity: (array, cities) => {
        const foundTowers = [];
        cities.forEach(city => {
           const towersInCity = array.filter(item => item.city === city);
           foundTowers.push(...towersInCity);
        });
        return foundTowers;
    },
    
    getTowersByTech: (array, tech) => {
        const foundTowers = array.filter(item => item.assignedTech  === tech.toLowerCase());
        return foundTowers;
    },
    
    getBySingleValue: (array, obj) => {
       const keys = Object.keys(obj);
       const values = Object.values(obj);
       const matched = array.filter(item => item[keys[0]] === values[0]);
       return matched;
    },
    
    getByValues: (array, obj) => {
        const values = Object.values(obj);
        const foundItems = [];
       
        array.forEach(item => {
            const itemValues = Object.values(item);
            const indexArray = [];
            
            values.forEach(value => {
                indexArray.push(itemValues.indexOf(value));
            });
            
            indexArray.indexOf(-1) === -1 && foundItems.push(item);
        });
        
        return foundItems;
    },

    getTowers: (towers, cities, amount) => {
        const foundTowers = [];
        const towersInCites = towerUtilities.getTowersByCity(towers, cities);
        
        if(towersInCites.length <= amount) {
            foundTowers.push(...towersInCites);
            return foundTowers;
        } else {
            const indices = getRandomIndices(towersInCites, amount);
            indices.forEach(index => {
                foundTowers.push(towersInCites[index]);
            });
            return foundTowers;
        }
    },
    
    getById: (array, id) => {
        const result = array.filter(item => item._id === id);
        return result[0];
    }
};

module.exports = towerUtilities;