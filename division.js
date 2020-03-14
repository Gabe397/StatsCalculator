class division {
    static divide(a = null, b = null) {
        try {
            let result = 0;
            result = a / b;
            return result;
        }
        catch{
            if(b=0){
                console.log("Can't divide by zero try again")
            }

        }
    }
}
module.exports = division;