const statsCalculator = require('../StatsCalculator');

test('Calculator get mean of array of 1,4,7 and get result 4', () => {
    let Calc = new statsCalculator();
    let myArray = [1,4,7];
    expect(Calc.mean(myArray)).toBe(4);
    expect(Calc.result).toBe(4);

});

test('Calculator get mode of array of 1,4,7,4 and get result 4', () => {
    let Calc = new statsCalculator();
    let myArray = [1,4,7,4];
    expect(Calc.mode(myArray)).toBe(4);
    expect(Calc.result).toBe(4);

});

test('Calculator get standard deviation of array of 2, 4, 4, 4, 5, 5, 7, 9 and get result 2', () => {
    let Calc = new statsCalculator();
    let myArray = [2, 4, 4, 4, 5, 5, 7, 9];
    expect(Calc.standardDeviation(myArray)).toBe(2);
    expect(Calc.result).toBe(2);

});