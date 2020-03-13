const RLGSeed = require('../RandomGenerationDir/RLGSeed');

test('Generates list with a seed', () => {
    let rngNum = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    expect(rngNum).toStrictEqual([73, 37, 21, 67, 19, 10, 6, 27, 9, 85]);

});