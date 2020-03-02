const meanStats = require('./meanStats');
const medianStats = require('./medianStats');
const modeStats = require('./modeStats');
const varianceStats = require('./varianceStats');
const standardDeviation = require('./standardDeviation');
const sampleCorrelation = require('./sampleCorrelationStats');
const populationCorrelation = require('./populationCorrelationStats');
const skewness = require('./skewness');
const zscore = require('./zScoreStat');
const meanDeviation = require('./meanDeviationStats');

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

    static populationCorrelation(myarray = [], myarray2 = []){
        return parseFloat(populationCorrelation.populationCorrelation(myarray,myarray2))
    }

    static sampleSkewness(myarray =[]){
        return skewness.sampleSkewness(myarray)
    }

    static zScore(num, myarray = []){
        return zscore.zScore(num,myarray)
    }

    static meanDeviation(myarray=[]){
        return meanDeviation.meanDeviation(myarray);
    }
}

module.exports = DescriptiveStatsOperations;