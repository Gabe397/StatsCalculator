const stdStats = require('../DescriptiveStatsDir/standardDeviation');
const squareRootStats = require('../squareRooting');
const ss = require('simple-statistics');

class marginOfError {
    static getMarginOfError(myarray = [],pp) {
        let sampleSize = myarray.length;
        let proportionPop = pp/100;
        let standardDev = stdStats.standardDeviation(myarray); //Population Standard Deviation Use When Array is Less Than 30
        let standardDevSample = ss.sampleStandardDeviation(myarray); //Sample Standard Deviation Use when Array is Larger Than 30
        let zScore95 = 1.960;


        let result = zScore95 * (squareRootStats.squareRoot(proportionPop * (1 - proportionPop))/squareRootStats.squareRoot(sampleSize));
        //let result = zScore95 *(standardDev/squareRootStats.squareRoot(arrayLength));

        return parseFloat(result.toFixed(4));


    }
}

module.exports = marginOfError;