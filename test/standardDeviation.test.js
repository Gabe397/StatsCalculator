const standardDeviation= require('../standardDeviation');

test('gets standard deviation of 2, 4, 4, 4, 5, 5, 7, 9 to equal 2', () => {
    expect(standardDeviation.standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
});