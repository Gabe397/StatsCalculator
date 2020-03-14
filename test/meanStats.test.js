const meanStats = require('../DescriptiveStatsDir/meanStats');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');

test('gets mean o  73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 35.4', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    expect(meanStats.mean(array1)).toBe(35.4);
});

test('gets mean o  73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 4', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let testFunction = ss.mean(array1);
    expect(meanStats.mean(array1)).toBe(testFunction);
});