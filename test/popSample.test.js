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

test('Get Confidence Interval and Return an Array with the Over and Under', () =>{
    let myArray = [8,15,25,24,9,21,29,17,30,5,6,3,20,16,2,22,28,11,14,13,19,0,12,18,27,4,1,10,23,36];
    let testArray2 = [8,15,25,24,9,21,29,17,30,5,6.19,15,17.25];
    let popCalc = new popSamp;

    let result = popCalc.getConfidenceInterval(myArray);
    let result2 = popCalc.getConfidenceInterval(testArray2);

    expect(result).toContain(12.13107);
    expect(result).toContain(19.06893);

    expect(result2).toContain(12.62297);
    expect(result2).toContain(21.44473);
});

test('Get Margin Of Error', () =>{
    let myArray = [8,15,25,24,9,21,29,17,30,5,6,3,20,16,2,22,28,11,14,13,19,0,12,18,27,4,1,10,23,36];
    let popCalc = new popSamp;

    let res = popCalc.getMarginOfError(myArray,50);
    expect(res).toBe(0.1789);
});

test('Get sample size using Cochran Formula', () =>{

    let popCalc = new popSamp;

    let res = popCalc.getCochranSample(50,8);
    expect(res).toBe(150);
});