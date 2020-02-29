var ss = require('simple-statistics');

class varianceStats{
    static variance(myarray = []) {
        let result = 0;
        result = ss.variance(myarray);
        return result;
    }
}

module.exports = varianceStats;