const statsCalculator = require('../StatsCalculator');

test('Calculator get mean of array of 1,4,7 and get result 4', () => {
    let Calc = new statsCalculator();
    let myArray = [1,4,7];
    expect(Calc.mean(myArray)).toBe(4);
    expect(Calc.result).toBe(4);

});

test('Calculator get median of array of 2,5,7 and get result 5', () => {
    let Calc = new statsCalculator();
    let myArray = [2,5,7];
    expect(Calc.median(myArray)).toBe(5);
    expect(Calc.result).toBe(5);

});

test('Calculator get mode of array of 1,4,7,4 and get result 4', () => {
    let Calc = new statsCalculator();
    let myArray = [1,4,7,4];
    expect(Calc.mode(myArray)).toBe(4);
    expect(Calc.result).toBe(4);

});

test('Calculator get variance of array of 3,6,9,12 and get result 11.25', () => {
    let Calc = new statsCalculator();
    let myArray = [3,6,9,12];
    expect(Calc.variance(myArray)).toBe(11.25);
    expect(Calc.result).toBe(11.25);

});

test('Calculator get standard deviation of array of 2, 4, 4, 4, 5, 5, 7, 9 and get result 2', () => {
    let Calc = new statsCalculator();
    let myArray = [2, 4, 4, 4, 5, 5, 7, 9];
    expect(Calc.standardDeviation(myArray)).toBe(2);
    expect(Calc.result).toBe(2);

});

test('Calculator get sample correlation of array 1,2,3,4 and array 2,4,6,8', () => {
    let Calc = new statsCalculator();
    let myArray = [2,4,6,8];
    let myArray2 = [2,4,6,10];
    expect(Calc.sampleCorrelation(myArray,myArray2)).toBe(0.9827);
    expect(Calc.result).toBe(0.9827);

});

test('Calculator get population correlation of array 1,2,3,4 and array 2,4,6,8', () => {
    let Calc = new statsCalculator();
    let myArray = [2,4,6,8];
    let myArray2 = [2,4,6,10];
    expect(Calc.populationCorrelation(myArray,myArray2)).toBe(0.9827);
    expect(Calc.result).toBe(0.9827);

});

test('Calculator get skewness of array of 2, 4, 6, 3, 1 and get result 0.590128656384365', () => {
    let Calc = new statsCalculator();
    let myArray = [2, 4, 6, 3, 1];
    expect(Calc.sampleSkewness(myArray)).toBe(0.590128656384365);
    expect(Calc.result).toBe(0.590128656384365);

});

test('Calculator get the z score of 2 and array 2,4,6,8', () => {
    let Calc = new statsCalculator();
    let myArray = [2,4,6,8];
    let num = 2;
    expect(Calc.zScore(num,myArray)).toBe(-1.3416);
    expect(Calc.result).toBe(-1.3416);

});

test('Calculator gets mean deviation of 3, 6 , 6, 7 ,8, 11, 15, 16 to equal 3.75', () => {
    let Calc = new statsCalculator();
    let myArray = [3, 6 , 6, 7 ,8, 11, 15, 16];
    let num = 2;
    expect(Calc.meanDeviation(myArray)).toBe(3.75);
    expect(Calc.result).toBe(3.75);

});