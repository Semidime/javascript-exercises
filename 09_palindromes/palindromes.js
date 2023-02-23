const palindromes = function (inputString) {

    let inputLower = inputString.toLowerCase();
    let stripPunctuation = inputLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let stripSpaces = stripPunctuation.replace(/\s/g, "")
    let reverse = stripSpaces.split("").reverse().join("");

/* stringName.replace(/[^a-z]/g, "")  
    CAN BE USED TO REPLACE EVERYTHING EXCEPT lc a-z */

/*     console.log(inputLower);
    console.log(stripPunctuation);
    console.log(stripSpaces);
    console.log(reverse);
    console.log(stripSpaces === reverse); */

    return (stripSpaces === reverse)

    

};
// Do not edit below this line
module.exports = palindromes;
