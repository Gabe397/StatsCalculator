const standardDeviation= require('../DescriptiveStatsDir/standardDeviation');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');


test('gets standard deviation of 2, 4, 4, 4, 5, 5, 7, 9 to equal 27.6', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);

    expect(standardDeviation.standardDeviation(array1)).toBe(27.61955828756137);
});

test('gets standard deviation of 2, 4, 4, 4, 5, 5, 7, 9 to equal 27.6', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let testFunction = ss.standardDeviation(array1);

    expect(standardDeviation.standardDeviation(array1)).toBe(testFunction);
});