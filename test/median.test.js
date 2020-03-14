const meanStats = require('../DescriptiveStatsDir/medianStats');
const ss = require('simple-statistics');
const randomList = require('../RandomGenerationDir/RLGSeed');

test('gets mean of 4, 1, 7 to equal 4', () => {
    let array1 = randomList.generateListSeed(0,90,0, "hello", 10);
    let testFunction = ss.median(array1);
    expect(meanStats.median(array1)).toBe(testFunction);
});