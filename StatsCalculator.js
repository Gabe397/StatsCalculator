const StatsOperations = require('./DescriptiveStatsOperations.js');

class StatsCalculator{

    mean(array){
        return this.result = StatsOperations.mean(array)
    }

    mode(array){
        return this.result = StatsOperations.mode(array)
    }

    standardDeviation(array){
        return this.result = StatsOperations.standardDeviation(array)
    }

}

module.exports = StatsCalculator;
