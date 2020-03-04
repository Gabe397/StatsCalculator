const unknownSS = require('../PopulationSamplingDir/sampleSizeUnknownPopStd');

test('Gets A Sample Size', () => {
    let result = unknownSS.getSampleSizeNoPopStd(6,41);

    console.log(result);
    expect(result).toBe(1033);
});