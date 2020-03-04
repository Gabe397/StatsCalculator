const meanStats = require('../meanStats');
const stdStats = require('../standardDeviation');
const squareRootStats = require('../squareRooting');
const ss = require('simple-statistics');

class confidenceInterval {
    static getConfidenceInterval(myarray = []) {
        let arrayLength = myarray.length;
        let mean = meanStats.mean(myarray);
        let standardDev = stdStats.standardDeviation(myarray); //Population Standard Deviation Use When Array is Less Than 30
        let standardDevSample = ss.sampleStandardDeviation(myarray); //Sample Standard Deviation Use when Array is Larger Than 30
        let zScore95 = 1.960;

            if(arrayLength<30){
                let over = mean + zScore95 *(standardDev/squareRootStats.squareRoot(arrayLength));
                let under = mean - zScore95 * (standardDev/squareRootStats.squareRoot(arrayLength));

                return [parseFloat(under.toFixed(5)), parseFloat(over.toFixed(5))];
            }

            else{
                let over = mean + zScore95 *(standardDevSample/squareRootStats.squareRoot(arrayLength));
                let under = mean - zScore95 * (standardDevSample/squareRootStats.squareRoot(arrayLength));

                return [parseFloat(under.toFixed(5)), parseFloat(over.toFixed(5))];
            }
    }
}

module.exports = confidenceInterval;