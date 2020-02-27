const meanStats = require('./meanStats');
const modeStats = require('./modeStats');
const standardDeviation = require('./standardDeviation');

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
}

module.exports = DescriptiveStatsOperations;