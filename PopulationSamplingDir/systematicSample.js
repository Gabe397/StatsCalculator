class systematicSample {
    static getSysSample(myarray = [], min) {
        let result = myarray.filter( function(value){
            return value < min
            }
        );

        return result;
    }
}

module.exports = systematicSample;