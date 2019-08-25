export default {
    isEmpty: value =>
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0),
    chunk: function(array, size) {
        if (!array) return [];
        const firstChunk = array.slice(0, size);
        if (!firstChunk.length) return array;
        return [firstChunk].concat(this.chunk(array.slice(size, array.length), size));
    }
};
