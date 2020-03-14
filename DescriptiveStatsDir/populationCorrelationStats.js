var ss = require('simple-statistics');

class populationCorrelationStats{
    static populationCorrelation(array1 = [], array2 = []) {
        let result = 0;
        result = ss.sampleCorrelation(array1,array2).toFixed(4);
        return result;
    }
}

module.exports = populationCorrelationStats;