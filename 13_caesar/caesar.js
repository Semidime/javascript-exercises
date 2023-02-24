const caesar = function(inputString,n) {
const inputArray = inputString.split("");
console.log(inputArray);
let outputString = "";
let charShift = n % 26
const upperCaseMin = 65;
const upperCaseMax = 90;
const lowerCaseMin = 97;
const lowerCaseMax = 122;

for (i=0; i < inputArray.length; i++) {
    let inputChar = inputArray[i].charCodeAt()
    let outputChar;
    
    if (inputChar >= upperCaseMin && inputChar <= upperCaseMax) {
        if (inputChar + charShift > upperCaseMax) {outputChar = inputChar + charShift - 26}
        else if (inputChar + charShift < upperCaseMin) {outputChar = inputChar + charShift + 26}
        else {outputChar = inputChar + charShift};

        outputString += String.fromCharCode(outputChar);
    }
    else if (inputChar >= lowerCaseMin && inputChar <= lowerCaseMax) {
        if (inputChar + charShift > lowerCaseMax) {outputChar = inputChar + charShift - 26}
        else if (inputChar + charShift < lowerCaseMin) {outputChar = inputChar + charShift + 26}
        else {outputChar = inputChar + charShift};
        
        outputString += String.fromCharCode(outputChar);
    }
    
    else outputString += inputArray[i];
}

console.log(outputString);
return outputString;

};
 caesar('Dirty String vest!', 51)

// Do not edit below this line
module.exports = caesar;
