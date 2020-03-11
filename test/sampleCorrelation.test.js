const sampleCorrelation = require('../sampleCorrelationStats');
const RLGSeed = require('../RLGSeed');
const ss = require('simple-statistics');

test('Tests for Sample Correlation', () => {
    let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);
    let array2 = RLGSeed.generateListSeed(0,90,0, "trello", 10);

    let myFunction = parseFloat(sampleCorrelation.sampleCorrelation(array1,array2));
    let testFunction = parseFloat(ss.sampleCorrelation(array1,array2).toFixed(4))


    expect(myFunction).toBe(testFunction);
});