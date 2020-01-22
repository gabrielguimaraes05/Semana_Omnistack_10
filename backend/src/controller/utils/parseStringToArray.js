module.exports = function parseStringToArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => arrayAsString.trim());
}