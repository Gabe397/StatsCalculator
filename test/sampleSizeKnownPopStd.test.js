const knownSS = require('../PopulationSamplingDir/sampleSizeKnownPopStd');

test('Gets A Sample Size with a known STD', () => {
    let result = knownSS.getSampleSizeKnown(2.9,0.5);

    console.log(result);
    expect(result).toBe(129);
});