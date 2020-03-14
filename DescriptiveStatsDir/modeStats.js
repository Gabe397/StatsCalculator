var ss = require('simple-statistics');

class modeStats{
    static mode(myarray = []) {
        let result = 0;
        result = ss.mode(myarray);
        return result;
    }
}

module.exports = modeStats;