class SelectRandomListItem {
    static returnListItem(list) {
        let result = 0;
        let index = 0;
        let listLength = list.length;
        index = parseFloat((Math.random() * (+listLength - +0) + +0).toFixed(0));
        result =  list[index];
        return result;
    }
}

module.exports = SelectRandomListItem;

