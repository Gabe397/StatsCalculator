const SMRLIS = require('../SelectMultipleRandomListItemsSeed');

test('Selects multiple random list items seed', () => {
    expect(SMRLIS.returnMultipleListItemsSeed([73, 37, 21, 67, 19, 10, 6, 27, 9, 85], 5, "bleh")).toStrictEqual([ 10, 19, 27, 21, 67 ]);

});

