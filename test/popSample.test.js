const popSamp = require('../PopulationSamplingDir/popSampleImplement');

test('Calculator get the z score of 2 and array 2,4,6,8', () => {
    let myArray = [2,4,6,8];
    let num = 2;
    let popCalc = new popSamp;
    let randomSample = popCalc.getPopSamp(myArray,num);

    expect(randomSample.length).toBe(num);

});