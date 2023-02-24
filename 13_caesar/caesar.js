const caesar = function(inputString,n) {
const inputArray = inputString.split("");
console.log(inputArray);


let outputString = "";
upperCaseRef = [];
lowerCaseRef = [];

for (i=0; i < inputArray.length; i++) {
    let letterRef = inputArray[i].charCodeAt()
    
    if (letterRef >= 65 && letterRef <= 90) {


        outputString += String.fromCharCode(letterRef+n)
    }
    else if (letterRef >= 97 && letterRef <= 122) {
        
        outputString += String.fromCharCode(letterRef+n)
    }
    
    else outputString += inputArray[i];
}

console.log(outputString);
return outputString;

};
caesar('A', 1)

// Do not edit below this line
module.exports = caesar;
