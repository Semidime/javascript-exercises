const reverseString = function(input) {
    let revString = "";
    const inputChars = [];

    for (let i = 0; i < input.length; i++) {
        inputChars.push(input.slice(i,i+1));
    }

    for (let n = 0; n < input.length; n++) {
        revString += inputChars.pop();
    }
    return revString
};

// Do not edit below this line
module.exports = reverseString;
