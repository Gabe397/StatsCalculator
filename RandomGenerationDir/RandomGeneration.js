const RNGNS = require('./RNGNoSeed');
const RNGS = require('./RNGSeed');
const RLGS = require('./RLGSeed');
const SRLI = require('./SelectRandomListItem');
const SRLIS = require('./SelectRandomListItemSeed');
const SMRLI = require('./SelectMultipleRandomListItems');
const SMRLIS = require('./SelectMultipleRandomListItemsSeed');

class RandomGeneration {
    static generateNoSeed(min, max, decimalPlace) {
        return RNGNS.generateNoSeed(min, max, decimalPlace);
    }
    static generateSeed(min, max, decimalPlace, seed) {
        return RNGS.generateSeed(min, max, decimalPlace, seed);
    }
    static generateListSeed(min, max, decimalPlace, seed, listLength) {
        return RLGS.generateListSeed(min, max, decimalPlace, seed, listLength);
    }
    static returnListItem(list){
        return SRLI.returnListItem(list);
    }
    static returnListItemSeed(list, seed){
        return SRLIS.returnListItemSeed(list, seed);
    }
    static returnMultipleListItems(list, numItems){
        return SMRLI.returnMultipleListItems(list, numItems);
    }

    static returnMultipleListItemsSeed(list, numItems, seed){
        return SMRLIS.returnMultipleListItemsSeed(list, numItems, seed);
    }

}

module.exports = RandomGeneration;