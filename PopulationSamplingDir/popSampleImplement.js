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

    getCochranSample(pp,margin,){
        return this.result = popSampFunctions.cochranSampleFormula(pp,margin);
    }

    getSampleSizeUnknownPopStd(width,gp){
        return this.result = popSampFunctions.sampleSizeUnknownPopStd(width,gp);
    }

    getSampleSizeKnownPopStd(moe,std){
        return this.result = popSampFunctions.sampleSizeKnownPopStd(moe,std);
    }

}

module.exports = popSampleImplement;