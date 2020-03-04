const randomSample = require('../PopulationSamplingDir/randomSample.js');
const sysSample = require('../PopulationSamplingDir/systematicSample.js');
const confidenceInterval = require('../PopulationSamplingDir/confidenceInterval.js');
const marginOfError = require('../PopulationSamplingDir/marginOfError.js');
const cochran = require('../PopulationSamplingDir/cochranSampleSize.js');
const unknownSS = require('../PopulationSamplingDir/sampleSizeUnknownPopStd');
const knownSS = require('../PopulationSamplingDir/sampleSizeKnownPopStd');


class populationSampling{
    static randomSampling(myarray = [], items){
        return randomSample.getRandomSample(myarray, items);
    }

    static sysSample(myarray = [], min){
        return sysSample.getSysSample(myarray, min);
    }

    static confidenceInterval(myarray = []){
        return confidenceInterval.getConfidenceInterval(myarray);
    }

    static marginOfError(myarray = [],pp){
        return marginOfError.getMarginOfError(myarray,pp);
    }

    static cochranSampleFormula(pp,margin){
        return cochran.getCochran(pp,margin);
    }

    static sampleSizeUnknownPopStd(width,gp){
        return unknownSS.getSampleSizeNoPopStd(width,gp);
    }

    static sampleSizeKnownPopStd(std,moe){
        return knownSS.getSampleSizeKnown(std,moe);
    }
}

module.exports = populationSampling;