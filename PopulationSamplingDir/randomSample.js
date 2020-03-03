const ss = require('simple-statistics');

class randomSample {
    static getRandomSample(myarray = [], items) {
        let result = ss.sample(myarray,items);
        return result;
    }
}

module.exports = randomSample;