function arrayMethod (array) {
    return array.map(arrayElement => arrayElement * arrayElement).filter(arrayElement => arrayElement > 20);
}

module.exports = arrayMethod;