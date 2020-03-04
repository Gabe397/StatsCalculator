const square = require('../squaring');

class sampleSizeUnknownPopStd {
    static getSampleSizeNoPopStd(width,gp) {
        let marginPercent = width/100;
        let margin = marginPercent/2;
        let zScore = 1.960;
        let gPercent = gp/100;
        let qPercent = 1 - gPercent;

        let multipliedPercentage = gPercent * qPercent;
        let squaredQuotient = square.square(zScore/margin);

        let result = multipliedPercentage * squaredQuotient;

        return Math.round(result);

    }
}

module.exports = sampleSizeUnknownPopStd;