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

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (Math.round(a) < 0) {
    let outputValue = 1;
    for (let i = Math.round(a); i <= -1; i++) {
      outputValue = outputValue * i
    }
    return outputValue;
  } else if (Math.round(a) == 0) {
    return 1; 
  } else {
    let outputValue = 1;
    for (let i = 1; i <= Math.round(a); i++) {
      outputValue = outputValue * i
    }
    return outputValue;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
