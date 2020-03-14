const meanDeviation= require('../DescriptiveStatsDir/meanDeviationStats');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');


test('gets mean deviation of 73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 24.080000000000002', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);

    expect(meanDeviation.meanDeviation(array1)).toBe(24.080000000000002);
});

