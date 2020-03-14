const skewness = require('../DescriptiveStatsDir/skewness');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');

test('gets skewness of  73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 0.7798150702570052', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    expect(skewness.sampleSkewness(array1)).toBe(0.7798150702570052);
});

test('gets skewness of  73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 0.7798150702570052', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let testFunction = ss.sampleSkewness(array1);
    expect(skewness.sampleSkewness(array1)).toBe(testFunction);
});