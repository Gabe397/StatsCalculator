const RandomGeneration = require('./RandomGeneration');

class RandomGenerator{

    generateNoSeed(min, max, decimalPlace) {
        return this.result = RandomGeneration.generateNoSeed(min, max, decimalPlace);
    }
    generateSeed(min, max, decimalPlace, seed) {
        return this.result = RandomGeneration.generateSeed(min, max, decimalPlace, seed);
    }

    generateListSeed(min, max, decimalPlace, seed, listLength) {
        return this.result = RandomGeneration.generateListSeed(min, max, decimalPlace, seed, listLength);
    }

    returnListItem(list){
        return this.result = RandomGeneration.returnListItem(list);

    }

    returnListItemSeed(list, seed){
        return this.result = RandomGeneration.returnListItemSeed(list, seed);

    }

    returnMultipleListItems(list, items){
        return this.result = RandomGeneration.returnMultipleListItems(list, items);

    }
    returnMultipleListItemsSeed(list, numItems, seed){
        return this.result = RandomGeneration.returnMultipleListItemsSeed(list, numItems, seed);

    }

}

module.exports = RandomGenerator;
