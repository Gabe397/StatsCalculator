const populationCorrelation = require('../populationCorrelationStats');

test('gets population correlation for [1,2,3,4],[2,3,6,8]', () => {
    expect(parseFloat(populationCorrelation.populationCorrelation([1,2,3,4],[2,3,6,8]))).toBe(0.9845);
});