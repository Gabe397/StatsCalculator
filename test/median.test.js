const meanStats = require('../medianStats');

test('gets mean of 4, 1, 7 to equal 4', () => {
    expect(meanStats.median([4,1,7])).toBe(4);
});