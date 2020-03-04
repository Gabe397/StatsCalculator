const confInterval = require('../PopulationSamplingDir/confidenceInterval');

test('Get Confidence Interval and Return an Array with the Over and Under', () =>{
    let myArray = [8,15,25,24,9,21,29,17,30,5,6,3,20,16,2,22,28,11,14,13,19,0,12,18,27,4,1,10,23,36];
    let testArray2 = [8,15,25,24,9,21,29,17,30,5,6];

    let result = confInterval.getConfidenceInterval(myArray);
    let result2 = confInterval.getConfidenceInterval(testArray2);

    expect(result).toContain(12.13107);
    expect(result).toContain(19.06893);

    expect(result2).toContain(11.96978);
    expect(result2).toContain(22.39386);
});

