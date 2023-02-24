const findTheOldest = function(inputArray) {
    let evalAge = 0;
    let oldestAge = 0;
    let oldestPersonIndex = 0;

    for (i=0; i < inputArray.length; i++) {

        if (typeof inputArray[i].yearOfDeath === "undefined") {
            const d = new Date();
            evalAge = d.getFullYear() - inputArray[i].yearOfBirth

        } else {
            evalAge = inputArray[i].yearOfDeath - inputArray[i].yearOfBirth
        }
        
        if (evalAge > oldestAge) {
            oldestAge = evalAge;
            oldestPersonIndex = i;
        }
    }

    console.log(inputArray[oldestPersonIndex]);
    return  inputArray[oldestPersonIndex];
};


// Do not edit below this line
module.exports = findTheOldest;
