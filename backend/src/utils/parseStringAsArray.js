module.exports = (arrayAsString) => {
    if (!arrayAsString)
        return ""
    return arrayAsString.split(',').map(tech => tech.trim());
};