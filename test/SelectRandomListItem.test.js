const SRLI = require('../RandomGenerationDir/SelectRandomListItem');

test('Selects random item in list', () => {
    let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
    //expect(SRLI.returnListItem([73, 37, 21, 67, 19, 10, 6, 27, 9, 85])).toBe(list.includes());
    expect(list.includes(SRLI.returnListItem(list))).toBe(true);
});