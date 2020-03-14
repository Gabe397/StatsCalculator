class division {
    static divide(a = null, b = null) {
        try {
            let result = 0;
            result = a / b;
            return result;
        }
        catch(e){
           logMyErrors(e);
        }

    }
}
module.exports = division;