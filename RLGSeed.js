const RNGSeed = require('./RNGSeed');

class RLGSeed {
    static generateListSeed(min, max, decimalPlace, seed, listLength) {

        let seedName = "";
        let seedList =  [];

        for(let i=0; i<listLength; i++){

            seedName = seed + i;
            seedList.push(RNGSeed.generateSeed(min, max, decimalPlace, seedName));
        }

        return seedList;

    }
}

module.exports = RLGSeed;


