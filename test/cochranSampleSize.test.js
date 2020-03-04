const css = require('../PopulationSamplingDir/cochranSampleSize');

test('Gets A Sample Size', () => {
    let result = css.getCochran(75,5);

    console.log(result);
    expect(result).toBe(288);
});