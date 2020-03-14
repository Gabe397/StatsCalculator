var ss = require('simple-statistics');

class meanStats{
    static mean(myarray = []) {
        let result = 0;
        result = ss.mean(myarray);
        return result;
    }
}

module.exports = meanStats;