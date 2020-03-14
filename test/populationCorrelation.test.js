const populationCorrelation = require('../DescriptiveStatsDir/populationCorrelationStats');
const RLGSeed = require('../RandomGenerationDir/RLGSeed');
const ss = require('simple-statistics');

test('gets population correlation for seed gen array equal -0.2937', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let array2 = RLGSeed.generateListSeed(0,90,0, "trello", 10);

    expect(parseFloat(populationCorrelation.populationCorrelation(array1, array2))).toBe(-0.2937);
});
test('gets population correlation for seed gen array equal -0.2937', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let array2 = RLGSeed.generateListSeed(0,90,0, "trello", 10);
    let testFunction = ss.sampleCorrelation(array1,array2);

    expect(parseFloat(populationCorrelation.populationCorrelation(array1, array2))).toBe(parseFloat(testFunction.toFixed(4)));
});