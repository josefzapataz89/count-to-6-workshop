'use strict'

module.exports = (...values) => {
    var sum = values.reduce((acum, curr) => acum + curr, 0);
    return sum / values.length;
};
