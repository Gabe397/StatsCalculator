const modeStats = require('../DescriptiveStatsDir/modeStats');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');


test('gets mode 73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 6', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    expect(modeStats.mode(array1)).toBe(6);
});

test('gets mode o  73, 37, 21, 67, 19, 10,  6, 27,  9, 85 to equal 6', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let testFunction = ss.mode(array1);
    expect(modeStats.mode(array1)).toBe(testFunction);
});