var ss = require('simple-statistics');

class medianStats{
    static median(myarray = []) {
        let result = 0;
        result = ss.median(myarray);
        return result;
    }
}

module.exports = medianStats;