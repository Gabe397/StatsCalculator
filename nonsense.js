let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
/*const RNGSeed = require('./RNGSeed');

function generateListSeed(min, max, decimalPlace, seed, listLength) {

 let seedName = "";
 let seedList =  [];

 for(let i=0; i<listLength; i++){

  seedName = seed + i;
  seedList.push(RNGSeed.generateSeed(min, max, decimalPlace, seedName));
 }

 return seedList;

}

console.log(generateListSeed(0,90,0,"hello", 10));

*/


/*var seedrandom = require('seedrandom');

let rng = 0;
let result = 0;
//result = parseFloat((seedrandom(seed) * (+max - +min) + +min).toFixed(decimalPlace));
let seedName = "hello";

rng = seedrandom("helo");

for(let i=0; i<10; i++){
 let prng = seedrandom(seedName + i)
 console.log(parseFloat((prng() * (90 - 0) + 0).toFixed(0)));
}*/

/*result = parseFloat((rng() * (90 - 0) + 0).toFixed(0));
console.log(result);*/

/*
let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
  let result = 0
  let index = 0;
  let listLength = list.length;
  index = parseFloat((Math.random() * (+listLength - +0) + +0).toFixed(0));
  result =  list[index];
console.log(result);

*/

/*
var seedrandom = require('seedrandom');

    let seed = "ihatethis";
    let list = [73, 37, 21, 67, 19, 10, 6, 27, 9, 85];
    let result = 0;
    let index = 0;
    let listLength = list.length;
    let mySeed = seedrandom(seed);
    index = parseFloat(( mySeed() * (+listLength - +0) + +0).toFixed(0));
    result =  list[index];
   // return result;

console.log(result);
*/



/*
var seedrandom = require('seedrandom');

  function returnMultipleListItems(list, numItems,seed) {
    let result = [];
    let item = 0;
    let index = 0;
    let listLength = list.length - 1;
    let mySeed = seedrandom(seed);

    if (numItems > listLength) {
      return null;
    }

    while (result.length != numItems) {
      index = parseFloat((mySeed() * (+listLength - +0) + +0).toFixed(0));
      item = list[index];

      if (!result.includes(item)) {
        result.push(item);
      } else {
        continue;
      }
    }

    return result;
  }



  console.log(returnMultipleListItems(list, 5, "bleh"));*/

const RLGSeed = require('./RandomGenerationDir/RLGSeed');
const statsCalculator = require('./DescriptiveStatsDir/meanDeviationStats');

let array1 = RLGSeed.generateListSeed(0,90,0, "hello", 10);

let result = statsCalculator.meanDeviation(array1);

console.log(array1);
console.log(result);