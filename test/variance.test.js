const varianceStats = require('../varianceStats');

test('gets variance of 1,5,10,15 to equal 27.6875', () => {
    expect(varianceStats.variance([1,5,10,15])).toBe(27.6875);
});