const meanStats = require('./meanStats');
const modeStats = require('./modeStats');
const standardDeviation = require('./standardDeviation');
const skewness = require('./skewness');

class DescriptiveStatsOperations {

    static mean(myarray = []){
        return meanStats.mean(myarray)
    }

    static mode(myarray = []){
        return modeStats.mode(myarray)
    }

    static standardDeviation(myarray = []){
        return standardDeviation.standardDeviation(myarray)
    }

    static sampleSkewness(myarray =[]){
        return skewness.sampleSkewness(myarray)
    }
}

module.exports = DescriptiveStatsOperations;