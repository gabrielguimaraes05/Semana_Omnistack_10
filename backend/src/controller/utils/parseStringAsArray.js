module.exports = function parseStringAsArray(arrayAsString) {
    if (!arrayAsString) return 'Error';
    return arrayAsString.split(',').map(tech => tech.trim()).filter(tech => !!tech);
}