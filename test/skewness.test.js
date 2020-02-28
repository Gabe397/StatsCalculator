const skewness = require('../skewness');

test('gets standard deviation of 2, 4, 6, 3, 1 to equal 2', () => {
    expect(skewness.sampleSkewness([2, 4, 6, 3, 1])).toBe(0.590128656384365);
});