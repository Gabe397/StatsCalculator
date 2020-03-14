var ss = require('simple-statistics');

class skewness{
    static sampleSkewness(myarray = []) {
        let result = 0;
        result = ss.sampleSkewness(myarray);
        return result;
    }
}

module.exports = skewness;