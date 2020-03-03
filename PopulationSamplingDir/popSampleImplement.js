const popSampFunctions = require('./populationSampling');

class popSampleImplement{
    getPopSamp(myarray, items){
        return this.result = popSampFunctions.randomSampling(myarray,items);
    }


}

module.exports = popSampleImplement;