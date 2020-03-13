class SelectMultipleRandomListItems {
    static returnMultipleListItems(list, numItems) {
        let result = [];
        let item = 0;
        let index = 0;
        let listLength = list.length - 1;

        if (numItems > listLength) {
            return null;
        }

        while (result.length != numItems) {
            index = parseFloat((Math.random() * (+listLength - +0) + +0).toFixed(0));
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

module.exports = SelectMultipleRandomListItems;

