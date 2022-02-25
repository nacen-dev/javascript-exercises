const sumAll = function (firstNum, secondNum) {
  if (firstNum < 0 || secondNum < 0 || !isNumType(firstNum) || !isNumType(secondNum)) return "ERROR";
  let sum = 0;
  let min = Math.min(firstNum, secondNum);
  let max = Math.max(firstNum, secondNum);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

const isNumType = (arg) => typeof arg === "number";

console.log(sumAll(5,5))

// Do not edit below this line
module.exports = sumAll;
