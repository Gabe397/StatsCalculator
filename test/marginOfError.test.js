const moe = require('../PopulationSamplingDir/marginOfError');

test('Gets the margin of error from a given array', () => {
    let myArray = [2,4,6,8];
    let result = moe.getMarginOfError(myArray,50);

    console.log(result);
    expect(result).toBe(.49);
});