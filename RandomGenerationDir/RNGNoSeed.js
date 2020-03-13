class RNGNoSeed {
    static generateNoSeed(min, max, decimalPlace) {
        let result = 0
        result = parseFloat((Math.random() * (+max - +min) + +min).toFixed(decimalPlace));

        return result;
    }
}

module.exports = RNGNoSeed;


