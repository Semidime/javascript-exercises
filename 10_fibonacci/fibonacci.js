const fibonacci = function(n) {

    if (n < 0) {
        return "OOPS";
    } else if (n === 0) { 
        return 0;    
    } else {
        const fibArray = [1,1];

        if (fibArray.length >= n) {
            
            console.log(fibArray[n-1]);
            return fibArray[n-1];
        } else {
            
            do {    
            fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
            } while (fibArray.length < n);

            console.log(fibArray);
            console.log(fibArray[n-1]);
            return fibArray[n-1];
        }
    }
};

fibonacci("12");

// Do not edit below this line
module.exports = fibonacci;
