const sumAll = function(a,b) {
    
    console.log(typeof(a));
    console.log(typeof(b));
  
    let sum = 0;

    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR"
    }
    else if (a < b) {
        for (i = a; i <= b; i++) {
            sum += i;
            console.log(sum);}
    } else {
        for (i = b; i <= a; i++) {
            sum += i;
            console.log(sum);}
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
