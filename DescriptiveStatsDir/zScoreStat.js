var ss = require('simple-statistics');
var m = require('./meanStats.js');
var std = require('./standardDeviation.js');

class zScoreStat{
    static zScore(a = number, myarray = []) {
        let result = 0;
        let means = m.mean(myarray);
        let standard = std.standardDeviation(myarray);
        result = parseFloat(ss.zScore(a,means,standard).toFixed(4));
        return result;
    }
}

module.exports = zScoreStat;