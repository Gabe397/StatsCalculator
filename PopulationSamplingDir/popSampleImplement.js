const popSampFunctions = require('./populationSampling');


class popSampleImplement{
    getPopSamp(myarray, items){
        return this.result = popSampFunctions.randomSampling(myarray,items);
    }

    getSysSamp(myarray,min){
        return this.result = popSampFunctions.sysSample(myarray, min);
    }


}

module.exports = popSampleImplement;