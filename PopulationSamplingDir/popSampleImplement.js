const popSampFunctions = require('./populationSampling');


class popSampleImplement{
    getPopSamp(myarray, items){
        return this.result = popSampFunctions.randomSampling(myarray,items);
    }

    getSysSamp(myarray,min){
        return this.result = popSampFunctions.sysSample(myarray, min);
    }

    getConfidenceInterval(myarray){
        return this.result = popSampFunctions.confidenceInterval(myarray);
    }

    getMarginOfError(myarray,pp){
        return this.result = popSampFunctions.marginOfError(myarray,pp);
    }


}

module.exports = popSampleImplement;