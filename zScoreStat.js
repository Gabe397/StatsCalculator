var ss = require('simple-statistics');
var m = require('./meanStats.js');
var std = require('./standardDeviation.js');

class zScoreStat{
    static zScore(a = number, myarray = []) {
        let result = 0;
        let mean = m.mean(myarray);
        let standard = std.standardDeviation(myarray);
        result = ss.zScore(a,mean,standard);
        return result;
    }
}

module.exports = zScoreStat;