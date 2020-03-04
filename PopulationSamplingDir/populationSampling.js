const randomSample = require('../PopulationSamplingDir/randomSample.js');
const sysSample = require('../PopulationSamplingDir/systematicSample.js');
const confidenceInterval = require('../PopulationSamplingDir/confidenceInterval.js');
const marginOfError = require('../PopulationSamplingDir/marginOfError.js');


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
}

module.exports = populationSampling;