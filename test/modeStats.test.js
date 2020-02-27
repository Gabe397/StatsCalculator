const modeStats = require('../modeStats');

test('gets mean of 4, 1, 7 to equal 4', () => {
    expect(modeStats.mode([4,1,7,4])).toBe(4);
});