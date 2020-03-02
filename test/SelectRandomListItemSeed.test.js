const SRLIS = require('../SelectRandomListItemSeed');

test('Selects Random item in list with a seed', () => {
    expect(SRLIS.returnListItemSeed([73, 37, 21, 67, 19, 10, 6, 27, 9, 85], "ihatethis")).toBe(67);

});