var seedrandom = require('seedrandom');

class SelectMultipleRandomListItemsSeed {
    static returnMultipleListItemsSeed(list, numItems, seed) {
        let result = [];
        let item = 0;
        let index = 0;
        let listLength = list.length - 1;
        let mySeed = seedrandom(seed);

        if (numItems > listLength) {
            return null;
        }

        while (result.length != numItems) {
            index = parseFloat((mySeed() * (+listLength - +0) + +0).toFixed(0));
            item = list[index];

            if (!result.includes(item)) {
                result.push(item);
            } else {
                continue;
            }
        }

        return result;
    }
}

module.exports = SelectMultipleRandomListItemsSeed;

