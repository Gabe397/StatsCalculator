const sampleCorrelation = require('../sampleCorrelationStats');

test('divides 1 / 2 to equal 0.5', () => {
    expect(parseFloat(sampleCorrelation.sampleCorrelation([1,2,3,4],[2,3,6,8]))).toBe(0.9845);
});