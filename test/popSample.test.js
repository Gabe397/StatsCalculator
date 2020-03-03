const popSamp = require('../PopulationSamplingDir/popSampleImplement');

test('Get A Population Sample', () => {
    let myArray = [2,4,6,8];
    let num = 2;
    let popCalc = new popSamp;
    let randomSample = popCalc.getPopSamp(myArray,num);

    expect(randomSample.length).toBe(num);

});

test('Check if array has these numbers filtered in from previous array', () =>{
    let myArray = [2,4,6,8,11,15];
    let min = 7;
    let popCalc = new popSamp;
    let systematicSample = popCalc.getSysSamp(myArray, min);

    expect(systematicSample).toContain(2);
    expect(systematicSample).toContain(4);
    expect(systematicSample).toContain(6);
});