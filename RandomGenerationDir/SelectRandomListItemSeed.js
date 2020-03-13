var seedrandom = require('seedrandom');

class SelectRandomListItemSeed {
    static returnListItemSeed(list, seed) {
        let result = 0;
        let index = 0;
        let listLength = list.length;
        let mySeed = seedrandom(seed);
        index = parseFloat(( mySeed() * (+listLength - +0) + +0).toFixed(0));
        result =  list[index];
        return result;
    }
}

module.exports = SelectRandomListItemSeed;

