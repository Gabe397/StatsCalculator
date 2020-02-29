const meanStats = require('./meanStats');
const medianStats = require('./medianStats');
const modeStats = require('./modeStats');
const standardDeviation = require('./standardDeviation');
const skewness = require('./skewness');

class DescriptiveStatsOperations {

    static mean(myarray = []){
        return meanStats.mean(myarray)
    }

    static median(myarray = []){
        return medianStats.median(myarray)
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