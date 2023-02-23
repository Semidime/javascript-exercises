const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(inputArray) {
	let sumArray = 0;
  inputArray.forEach(arrElement => {
    sumArray += arrElement;
  });

  return sumArray;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

console.log(sum([1,2,3]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
