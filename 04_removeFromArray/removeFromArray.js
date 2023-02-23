const removeFromArray = function(inputArray) {
    
    console.log(inputArray);
    const outputArray = Array.from(arguments[0]);
    console.log(outputArray);
    console.log(arguments.length);
    
    for (let i = 1; i < arguments.length; i++) {
        while (outputArray.includes(arguments[i])) {
            outputArray.splice(outputArray.indexOf(arguments[i]),1);
            console.log(outputArray);
        }
    }  

    console.log(inputArray);
    console.log(outputArray);

    return outputArray

};

// Do not edit below this line
module.exports = removeFromArray;
