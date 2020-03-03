const randomSample = require('/Users/gabe3/WebstormProjects/StatsCalculator/PopulationSamplingDir/randomSample.js');

class populationSampling{
    static randomSampling(myarray = [], items){
        return randomSample.getRandomSample(myarray, items);
    }

}

module.exports = populationSampling;