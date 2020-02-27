const meanStats = require('../meanStats');

test('gets mean of 4, 1, 7 to equal 4', () => {
    expect(meanStats.mean([4,1,7])).toBe(4);
});