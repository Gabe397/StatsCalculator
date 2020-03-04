const squared = require('../squaring');


class cochranSampleSize {
    static getCochran(pp,marginError) {
        let proportionPop = pp/100;
        let margin = marginError/100;
        let zScore95 = 1.960;

        //let moe = zScore95 * (squareRootStats.squareRoot(proportionPop * (1 - proportionPop))/squareRootStats.squareRoot(sampleSize));
        //let result = zScore95 *(standardDev/squareRootStats.squareRoot(arrayLength));

        let result = ((squared.square(zScore95) * proportionPop * (1 - proportionPop)) / squared.square(margin));


        return parseFloat(result.toFixed(0));


    }
}

module.exports = cochranSampleSize;