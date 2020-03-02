const meanDeviation= require('../meanDeviationStats');

test('gets mean deviation of 3, 6 , 6, 7 ,8, 11, 15, 16 to equal 3.75', () => {
    expect(meanDeviation.meanDeviation([3, 6 , 6, 7 ,8, 11, 15, 16])).toBe(3.75);
});