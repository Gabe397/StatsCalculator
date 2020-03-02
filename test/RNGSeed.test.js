const RNGSeed = require('../RNGSeed');

test('Generates number with a seed', () => {
    expect(RNGSeed.generateSeed(0,90,0, "helo")).toBe(46);
});