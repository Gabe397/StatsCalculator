const varianceStats = require('../varianceStats');
const ss = require ('simple-statistics');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');

test('gets variance of 1,5,10,15 to equal 27.6875', () => {

    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);

    let testFunction = ss.variance(array1);
    expect(varianceStats.variance(array1)).toBe(testFunction);
});