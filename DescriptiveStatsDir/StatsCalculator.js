const StatsOperations = require('./DescriptiveStatsOperations.js');

class StatsCalculator{

    mean(array){
        return this.result = StatsOperations.mean(array)
    }

    median(array){
        return this.result = StatsOperations.median(array)
    }

    mode(array){
        return this.result = StatsOperations.mode(array)
    }

    variance(array){
        return this.result = StatsOperations.variance(array)
    }

    standardDeviation(array){
        return this.result = StatsOperations.standardDeviation(array)
    }

    sampleCorrelation(array,array2){
        return this.result = StatsOperations.sampleCorrelation(array,array2)
    }

    populationCorrelation(array,array2){
        return this.result = StatsOperations.populationCorrelation(array,array2)
    }

    sampleSkewness(array){
        return this.result = StatsOperations.sampleSkewness(array)
    }

    zScore(num,array){
        return this.result = StatsOperations.zScore(num,array)
    }

    meanDeviation(array){
        return this.result = StatsOperations.meanDeviation(array);
    }

}

module.exports = StatsCalculator;
