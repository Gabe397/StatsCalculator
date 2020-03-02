const RNGNoSeed = require('../RNGNoSeed');

test('Generates number without a seed', () => {
    let rngNum = RNGNoSeed.generateNoSeed(0,2,0);
    expect(rngNum).toBeGreaterThanOrEqual(0);
    expect(rngNum).toBeLessThanOrEqual(2);
});