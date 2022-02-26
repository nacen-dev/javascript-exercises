const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (numbers) {
  return numbers.reduce((sum, currentNum) => sum + currentNum, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((product, currentNum) => product * currentNum, 1);
};

const power = function (base, exponent) {
  let powerNum = base;
  for (let i = 1; i < exponent; i++) {
    powerNum *= base;
  }
  return powerNum;
  // return Math.pow(base, exponent); another solution
};

const factorial = function (num) {
  let result = 1;
  if (num === 0) return result;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
