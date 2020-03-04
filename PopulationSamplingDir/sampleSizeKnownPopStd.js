const square = require('../squaring');

class sampleSizeKnownPopStd {
    static getSampleSizeKnown(std,moe) {
        let marginOfError = moe;
        let zScore = 1.96;
        let product = std * zScore;
        let quotient = product/marginOfError;
        let result = square.square(quotient);

        return Math.round(result);

    }
}

module.exports = sampleSizeKnownPopStd;