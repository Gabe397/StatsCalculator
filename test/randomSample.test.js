const randSamp = require('../PopulationSamplingDir/randomSample');

test('gets a random sample from the array', () => {
    let myArray = [2,4,6,8];
    let num = 2;
    let randomSample = randSamp.getRandomSample(myArray,num);

    expect(randomSample.length).toBe(num);
});