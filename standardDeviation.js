var ss = require('simple-statistics');

class standardDeviation{
    static standardDeviation(myarray = []) {
        let result = 0;
        result = ss.standardDeviation(myarray);
        return result;
    }
}

module.exports = standardDeviation;