const randomSample = require('/Users/gabe3/WebstormProjects/StatsCalculator/PopulationSamplingDir/randomSample.js');
const sysSample = require('/Users/gabe3/WebstormProjects/StatsCalculator/PopulationSamplingDir/systematicSample.js');


class populationSampling{
    static randomSampling(myarray = [], items){
        return randomSample.getRandomSample(myarray, items);
    }

    static sysSample(myarray = [], min){
        return sysSample.getSysSample(myarray, min);
    }

}

module.exports = populationSampling;