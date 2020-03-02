var seedrandom = require('seedrandom');


class RNGSeed {
    static generateSeed(min, max, decimalPlace, seed) {

        let rng = 0;
        let result = 0;
        //result = parseFloat((seedrandom(seed) * (+max - +min) + +min).toFixed(decimalPlace));
        rng = seedrandom(seed);

        result = parseFloat((rng() * (+max - +min) + +min).toFixed(decimalPlace));

        return result;
    }
}

module.exports = RNGSeed;


