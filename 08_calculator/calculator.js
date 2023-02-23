const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(inputArray) {
	let outputValue = 0;
  inputArray.forEach(arrElement => {
    outputValue += arrElement;
  });

  return outputValue;
};

const multiply = function(inputArray) {
  let outputValue = 0;
  if (inputArray.length > 0) {
    outputValue = 1;
  }
  inputArray.forEach(int => {
    outputValue  = outputValue * int;
  });

  return outputValue
  
};

const power = function() {
	
};

const factorial = function() {
	
};

/* console.log(multiply([]));
console.log(sum([2,3])); */

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
