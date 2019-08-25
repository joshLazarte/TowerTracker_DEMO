const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
};

const getRandomIndices = (array, amount) => {
    const indices = [];
    
    while(indices.length < amount) {
        let randomIndex = getRandomIndex(array.length);
        const arrayToCheck = indices.filter(index => index === randomIndex);
        arrayToCheck.length === 0 && indices.push(randomIndex);
    }
    
    return indices;
};

export { getRandomIndices }; 