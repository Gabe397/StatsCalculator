var ss = require('simple-statistics');

class sampleCorrelationStats{
    static sampleCorrelation(array1 = [], array2 = []) {
        let result = 0;
        result = ss.sampleCorrelation(array1,array2).toFixed(4);
        return result;
    }
}

module.exports = sampleCorrelationStats;