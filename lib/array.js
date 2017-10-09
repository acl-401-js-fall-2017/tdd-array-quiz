function arrayMethod (array) {
    return array.map(a => a*a).filter(a => a > 20);
}

module.exports = arrayMethod;