const RandomGenerator = require('../RandomGenerationDir/RandomGenerator');

test('Generates number without a seed', () => {
    let Generator = new RandomGenerator();
    let rngNum = Generator.generateNoSeed(0,2,0);
    expect(rngNum).toBeGreaterThanOrEqual(0);
    expect(rngNum).toBeLessThanOrEqual(2);

});

test('Generates number with a seed', () => {
    let Generator = new RandomGenerator();
    expect(Generator.generateSeed(0,90,0, "helo")).toBe(46);

});

test('Generates list with a seed', () => {
    let Generator = new RandomGenerator();
    let rngNum = Generator.generateListSeed(0,90,0, "hello", 10);
    expect(rngNum).toStrictEqual([73, 37, 21, 67, 19, 10, 6, 27, 9, 85]);


});

test('Selects random list item', () => {
    let Generator = new RandomGenerator();
    let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
    expect(list.includes(Generator.returnListItem(list))).toBe(true);

});

test('Selects Random item in list with a seed', () => {
    let Generator = new RandomGenerator();
    expect(Generator.returnListItemSeed([73, 37, 21, 67, 19, 10, 6, 27, 9, 85], "ihatethis")).toBe(67);


});

test('Selects multiple random items in list', () => {
    let Generator = new RandomGenerator();
    let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
    let items = 5;
    let expected = Generator.returnMultipleListItems( list, items);
    expect(list).toStrictEqual(expect.arrayContaining(expected));

});

test('Selects multiple random items in list', () => {
    let Generator = new RandomGenerator();
    expect(Generator.returnMultipleListItemsSeed([73, 37, 21, 67, 19, 10, 6, 27, 9, 85], 5, "bleh")).toStrictEqual([ 10, 19, 27, 21, 67 ]);


});