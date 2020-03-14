var ss = require('simple-statistics');

class meanDeviationStats{
    static meanDeviation(myarray = []) {
        let meanResult = 0;
        let meanDistance = 0;
        let meanDev = 0;

        meanResult = ss.mean(myarray);
        for(let i=0; i< myarray.length; i++){
            meanDistance += Math.abs(myarray[i] - meanResult);
        }

        meanDev = meanDistance/myarray.length;
        return meanDev;
    }
}

module.exports = meanDeviationStats;