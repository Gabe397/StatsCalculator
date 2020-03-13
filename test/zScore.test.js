const zScore = require('../zScoreStat');
const randomList = require('../RandomGenerationDir/RLGSeed');

test('Test Z Score', () => {
    let num = 2;

    myArray = randomList.generateListSeed(0,90,0, "hello", 10);
    expect(zScore.zScore(num,myArray)).toBe(-1.2093);
});