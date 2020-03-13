const SMRLI = require('../RandomGenerationDir/SelectMultipleRandomListItems');

test('Selects multiple random items in list', () => {
    let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
    let expected = SMRLI.returnMultipleListItems(list, 5);
    expect(list).toStrictEqual(expect.arrayContaining(expected));

});

