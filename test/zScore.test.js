const zScore = require('../zScoreStat');

test('Test Z Score', () => {
    let myArray = [2,4,6,8];
    let num = 2;
    expect(zScore.zScore(num,myArray)).toBe(-1.3416);
});