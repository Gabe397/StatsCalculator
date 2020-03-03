const randSamp = require('../PopulationSamplingDir/randomSample');

test('gets mean of 4, 1, 7 to equal 4', () => {
    let myArray = [2,4,6,8];
    let num = 2;
    let randomSample = randSamp.getRandomSample(myArray,num);

    expect(randomSample.length).toBe(num);
});