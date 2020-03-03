const sysSamp = require('../PopulationSamplingDir/systematicSample');

test('expect 2,4,6 to be in new array', () => {
    let myArray = [2,4,6,8,11,15];
    let min = 7;
    let systematicSample = sysSamp.getSysSample(myArray,min);

    expect(systematicSample).toContain(2);
    expect(systematicSample).toContain(4);
    expect(systematicSample).toContain(6);


});