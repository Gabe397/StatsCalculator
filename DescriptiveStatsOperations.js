const meanStats = require('./meanStats');
const medianStats = require('./medianStats');
const modeStats = require('./modeStats');
const varianceStats = require('./varianceStats');
const standardDeviation = require('./standardDeviation');
const sampleCorrelation = require('./sampleCorrelationStats');
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

    static variance(myarray = []){
        return varianceStats.variance(myarray)
    }

    static standardDeviation(myarray = []){
        return standardDeviation.standardDeviation(myarray)
    }

    static sampleCorrelation(myarray = [], myarray2 = []){
        return parseFloat(sampleCorrelation.sampleCorrelation(myarray,myarray2))
    }

    static sampleSkewness(myarray =[]){
        return skewness.sampleSkewness(myarray)
    }
}

module.exports = DescriptiveStatsOperations;